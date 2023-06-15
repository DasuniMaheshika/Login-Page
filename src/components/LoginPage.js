import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginSuccess,
  loginFailure,
  resetError,
} from '../actionTypes/actionTypes';
import '../../src/index.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loggedIn, error } = useSelector((state) => state.login);

  const handleSubmit = (e) => {
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
    // Validate email format
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(email);
  };

  const isValidPassword = (password) => {
    // Validate password length
    return password.length >= 6;
  };

  return (
    <div data-testid='login-component'>
      <form onClick={handleSubmit} id='main'>
        <h1>Login Page</h1>

        <div class='imgcontainer'>
          <img
            src='https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
            alt='Avatar'
            class='avatar'
          />
        </div>
        <div class='input-parent'>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class='input-parent'>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            placeholder='Password'
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
