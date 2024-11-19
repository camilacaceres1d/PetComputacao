import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import News from "./../components/News/News";
import React from 'react';
import { useState } from "react";
function Contato (){
  
  
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // E-mail fixo como destinatário
    const email = "camilacardosocaceres@gmail.com";

    // Redireciona para o Gmail com os dados do assunto e corpo preenchidos pelo usuário
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  };

  return (
    <>
    <Navbar/>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Assunto:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Mensagem:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Enviar e-mail</button>
    </form>
    <News/>
    <Footer/>
    
    </>
   
    );
}
export default Contato;