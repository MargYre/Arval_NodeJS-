const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');  // Importer cors
const app = express();
const PORT = 5000;

const db = new sqlite3.Database('./backend.db');

// Middleware
app.use(bodyParser.json());
app.use(cors());  // Utiliser cors pour permettre les requêtes cross-origin

// Création de la table users si elle n'existe pas
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            email TEXT UNIQUE,
            password TEXT
        )
    `);
});

// Route pour l'inscription
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    db.run(
        `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
        [username, email, hashedPassword],
        function (err) {
            if (err) {
                return res.status(400).json({ message: 'Adresse e-mail déjà utilisée!' });
            }
            res.json({ message: 'Enregistrement réussi!' });
        }
    );
});

// Route pour le login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur interne.' });
        }

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({ message: 'Adresse e-mail ou mot de passe incorrect!' });
        }

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
        res.json({ message: 'Connexion réussie!', token });
    });
});

// Route protégée
app.get('/welcome', (req, res) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Non autorisé!' });
    }

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token invalide!' });
        }
        res.json({ message: `Bienvenue dans l'application, utilisateur ${decoded.id}!` });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur en marche sur le port ${PORT}`);
});
