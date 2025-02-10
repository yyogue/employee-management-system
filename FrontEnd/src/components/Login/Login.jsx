import React, { useState } from 'react';
import { login } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);

    try {
      const response = await login(email, password);
      console.log('Login response:', response);      
      // Assuming response.data is an object containing user info
      onLogin(response.data);
      navigate('/');  // Navigate to dashboard after successful login
    } catch (err) {
      console.error('Login Error:', err); // Log the entire error object
      if (err.response) {
        console.error('Error Data:', err.response.data);
        setError(err.response.data.message || 'Mot de passe ou email incorrect');
      } else {
        setError('Une erreur est survenue');
      }
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
