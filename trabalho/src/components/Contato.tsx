import React, { useState } from "react";
import "../styles/Contato.css";

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("URL_DA_FUNÇÃO_LAMBDA", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
      }
    } catch (err) {
      setError("Erro de conexão. Verifique sua internet e tente novamente.");
    }
  };

  return (
    <section className="contato-container">
      <h2 className="contato-title">Fale Conosco</h2>
      <p className="contato-subtitle">
        Tem alguma dúvida ou precisa de ajuda? Envie sua mensagem!
      </p>

      {isSubmitted ? (
        <p className="contato-success">Sua mensagem foi enviada com sucesso!</p>
      ) : (
        <form className="contato-form" onSubmit={handleSubmit}>
          <div className="contato-field">
            <label htmlFor="name" className="contato-label">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contato-input"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contato-field">
            <label htmlFor="email" className="contato-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contato-input"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contato-field">
            <label htmlFor="message" className="contato-label">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              className="contato-textarea"
              placeholder="Digite sua mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="contato-button">
            Enviar Mensagem
          </button>
        </form>
      )}

      {error && <p className="contato-error">{error}</p>}
    </section>
  );
};

export default Contato;
