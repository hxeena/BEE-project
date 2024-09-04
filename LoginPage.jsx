import React from 'react';
import Login from './Login';
import './LoginPage.css'; // Ensure this file exists for styling

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="left-side">
        <div className="text-content">
          <h1>Welcome to Our E-Commerce Website</h1>
          <p>Discover top-rated products and exclusive deals just for you.</p>
          <button className="explore-button">Explore Now</button>
          <p className="info-text">Already a member? Sign in to access your account and personalized offers.</p>
          <div className="additional-content">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Exclusive Discounts</li>
              <li>Wide Range of Products</li>
              <li>Fast Shipping</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right-side">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
