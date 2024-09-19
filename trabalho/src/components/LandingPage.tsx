import React, { useRef } from 'react';
import './LandingPage.css';
import Header from './Header';

const LandingPage: React.FC = () => {

  const promotionsRef = useRef<HTMLElement>(null);

  const handleScrollToPromotions = () => {
    promotionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  
  };

  return (
    <div className="landing-page">
      <Header /> {}

      <section className="hero">
        <div className="hero-content">
        <i className="fas fa-dice" style={{ fontSize: '100px', color: '#white' }}></i> {/* Ícone de cassino */}
          <h1>Venha conhecer o melhor cassino</h1>
          <p>Experimente a emoção dos grandes cassinos sem sair de casa. Jogue os melhores jogos de cassino com segurança e aproveite bônus exclusivos.</p>
          <button className="cta-button" onClick={handleScrollToPromotions}>
            Saber mais
          </button>
        </div>
        
      </section>
      <section id="promotions" className="promotions" ref={promotionsRef}>
        <h2>Promoções Exclusivas</h2>
        <div className="promotion-cards">
          <div className="promotion-card">
            <i className="fas fa-gift"></i> {/* Ícone de presente */}
            <h3>Bônus de Boas-Vindas</h3>
            <p>Ganhe um bônus de até 100% no seu primeiro depósito!</p>
          </div>
          <div className="promotion-card">
            <i className="fas fa-coins"></i> {/* Ícone de moedas */}
            <h3>Rodadas Grátis</h3>
            <p>Aproveite 50 rodadas grátis em slots selecionados ao se registrar. Jogue e ganhe sem gastar nada!</p>
          </div>
          <div className="promotion-card">
            <i className="fas fa-refresh"></i> {/* Ícone de recarga */}
            <h3>Bônus de Recarga</h3>
            <p>Ganhe 20% de bônus em todos os seus depósitos durante o fim de semana!</p>
          </div>
        </div>
      </section>
      <section className="footer">
        <p>&copy; 2024 Casa de Apostas. Todos os direitos reservados.</p>
        <p>&copy; Criado por: Gabriel Vanz</p>
      </section>
    </div>
  );
};

export default LandingPage;
