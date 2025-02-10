import React, { useState } from 'react';
import { login } from '../../services/api';
// import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      onLogin(response.data);
    } catch (err) {
      setError('Mot de passe ou email incorrect');
    }
  };

  return (
    <div className='mainLogin'>
      <h2 className='login'>Login</h2>
      <form className='formLogin' onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default Login;
