import React, { useState } from 'react';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4500/api/v2/User/login', formData)
      .then(response => {
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          setAuthenticated(true);
          navigate('/home');
        } else {
          setError('Invalid email or password');
        }
      })
      .catch(error => {
        console.error('There was an error logging in!', error);
        setError('There was an error logging in');
      });
  };

  return (
    <div className="login-container">
      <h1>STAY FIT<span style={{ color: '#00ff00' }}>T</span></h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FaKey className="icon" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">LOGIN</button>
        {error && <p className="error-message">{error}</p>}
        <p className="guest-login">Log in as <span className="guest">GUEST</span></p>
        <p className="signup-prompt">Don't have an account? <span className="signup-link" onClick={() => navigate('/signup')}>Signup here</span></p>
      </form>
    </div>
  );
};

export default Login;
