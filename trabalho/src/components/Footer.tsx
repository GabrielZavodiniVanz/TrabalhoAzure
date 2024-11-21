import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-section">
          <h4 className="footer-title">Sobre Nós</h4>
          <p>Somos uma empresa comprometida em oferecer soluções inovadoras e de alta qualidade para nossos clientes. Nossa missão é transformar ideias em realidade.</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Links Rápidos</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Política de Privacidade</a></li>
            <li><a href="#" className="footer-link">Termos de Serviço</a></li>
            <li><a href="#" className="footer-link">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Fale Conosco</h4>
          <p>Email: contato@empresa.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Feito por Gabriel Vanz. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
