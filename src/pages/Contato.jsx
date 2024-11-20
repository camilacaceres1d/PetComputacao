import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import News from "./../components/News/News";
import iconInstagram from '../assets/images/icons8-instagram-50.png';
import iconGithub from '../assets/images/icons8-github-60.png';
import "./Contato.css"
import React from 'react';
import { useState } from "react";

function Contato (){
  
  
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = "camilacardosocaceres@gmail.com";
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  };

  return (
    <>
    <Navbar/>
    
   
    <div className="container-contacts">
      
      

     <div className = "box-contacts">
      <form className = "form-contacts" onSubmit={handleSubmit}>
      <div >
        <label>
          Assunto: 
          </label><br/>
          <input type="text"  value={subject} onChange={(e) => setSubject(e.target.value)} required/>
       
      </div>
      <div>
        <label>
          Mensagem:
          </label><br/>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} required/>
        
      </div>
      <button type="submit">Enviar e-mail</button>
    </form>
    <div className="link-contacts">
      
        <h3>Confira mais em: </h3>
        <img className = "contact-instagram" src = {iconInstagram} alt = ""/>
        <label>Instagram</label>
        <br/>
        <img className = "contact-github" src = {iconGithub} alt = ""/> 
        <label>Github</label>
      
        
    </div>
    </div>
     </div>
    
    
    <News/>
    <Footer/>
    
    </>
   
    );
}
export default Contato;