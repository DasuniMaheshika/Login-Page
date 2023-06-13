import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginSuccess,
  loginFailure,
  resetError,
} from '../actionTypes/actionTypes';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loggedIn, error } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset error message
    dispatch(resetError());

    // Validate email and password
    if (email === '' || password === '') {
      dispatch(loginFailure('Please fill in all fields.'));
    } else if (!isValidEmail(email) || !isValidPassword(password)) {
      dispatch(loginFailure('Invalid email or password.'));
    } else {
      // Simulate login success
      dispatch(loginSuccess());
    }
  };

  const isValidEmail = (email) => {
    // Validate email format (simple validation for demonstration purposes)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    // Validate password length (simple validation for demonstration purposes)
    return password.length >= 6;
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      {loggedIn && <p>Login success!</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
