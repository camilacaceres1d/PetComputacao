import React from 'react';
import './Footer.css'; 

import logoFacom from '../../assets/images/facom_ufms.png'
import logoUfms from '../../assets/images/ufms_logo_negativo_pb_rgb.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-images">
          
        <img className='logoFacom' src = {logoFacom} alt = ""/>

        <img className = "logoufms" src = {logoUfms} alt = ""/>
          
        </div>
        <div className="footer-text">
          <p>Universidade Federal do Mato Grosso do Sul - FACOM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
