import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';



const Cadastro: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  
  
  
  const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
    
  if (!termsAccepted) {
    alert('Você precisa aceitar os termos de uso.');
    return;
  }
    const firstLetter = name.charAt(0).toUpperCase();
    localStorage.setItem('userInitial', firstLetter);
    localStorage.setItem('userName', name);
  
    navigate('/');
  };

  return (
    <div className="cadastro-page">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="terms-container">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required
          />
          <label htmlFor="terms"> <a  target="_blank" rel="noopener noreferrer">Aceito os termos de uso</a></label>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
