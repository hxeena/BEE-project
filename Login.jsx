import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import users from './users.json';  // Import the static data from JSON file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate replaces useHistory in React Router v6

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === email);

    if (!user) {
      setError('Email does not exist');
      return;
    }

    if (user.password !== password) {
      setError('Incorrect password');
      return;
    }

    setError('');
    console.log('Login successful:', { email, password });
    navigate('/home'); // Redirect to the home page on successful login
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
