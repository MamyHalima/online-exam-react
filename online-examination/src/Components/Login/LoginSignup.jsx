import React, { useState } from 'react';
import './LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [action, setAction] = useState('Sign up');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      username: name,
      email: email,
      password: password, // Correct field name for password
    };

    try {
      if (action === 'Sign up') {
        await axios.post('http://localhost:8080/api/users/', userData);
        alert('User created successfully!');
      } else {
        // Implement login logic here
      }
      navigate('/Exam');
    } catch (error) {
      console.error('There was an error creating the user!', error);
      alert('Error creating user.');
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='header'>
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Sign up" && (
            <div className="input">
              <img src="/User-icon.png" alt="User icon" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={action === "Sign up"}
              />
            </div>
          )}
          <div className="input">
            <img src="/email-icon.jpg" alt="Email icon" />
            <input
              type="email"
              placeholder="Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <img src="/password-icon.png" alt="Password icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="submitcontainer">
          <button type="submit" className="submit">{action}</button>
        </div>
        <div className="toggle-action">
          {action === "Login" ? (
            <span onClick={() => setAction("Sign up")}>Don't have an account? Sign up</span>
          ) : (
            <span onClick={() => setAction("Login")}>Already have an account? Login</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
