import React, { useState } from 'react';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="loginContainer">
      <h2 className="heading">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password" className="label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
        </div>
        <button type="submit" className="loginBtn">Login</button>
      </form>
    </div>
  );
}

export default Login;