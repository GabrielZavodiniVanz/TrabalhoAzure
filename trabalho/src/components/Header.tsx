import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
   
    const userInitial = localStorage.getItem('userInitial');

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
    <header className="header">
      <div className="header-content">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <nav className="nav">
        <ul>
            <div className="inicioButtom"  onClick={handleScrollToTop}>
            <li><Link to="/">Início</Link></li>
            </div>
            
            {userInitial ? (
                <div className="NameButtom"> 
                <span className="user-initial">{userInitial}</span>
                </div>
                ) : (
            <div className="CadastroButtom">
              <li><Link to="/cadastro">Cadastro</Link></li>
            </div>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
