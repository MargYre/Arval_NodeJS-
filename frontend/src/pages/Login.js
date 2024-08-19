import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  // Remplace useHistory par useNavigate
import '../styles/Form.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Remplace useHistory par useNavigate

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/login', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        navigate('/welcome');  // Utilise navigate pour rediriger
      })
      .catch(error => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <Link to="/register">Register here</Link>
    </div>
  );
}

export default Login;
