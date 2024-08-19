import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";

function Welcome() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('http://localhost:5000/welcome', {
      headers: { 'Authorization': token }
    })
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage(error.response.data.message);
      });
  }, []);

  return (
    <div className="home-container">
        <Header />
        <MainContent/>
        <Footer />
    </div>
  );
}

export default Welcome;