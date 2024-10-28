import React from 'react';
import './Footer.css'; 

import logoFacom from '../../assets/images/facom_ufms.png';
import logoUfms from '../../assets/images/ufms_logo_negativo_pb_rgb.png';
import iconInstagram from '../../assets/images/icons8-instagram-50.png';
import iconGithub from '../../assets/images/icons8-github-60.png';

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
          <div className = "contacts-images">
            <img className = "icon-instagram" src = {iconInstagram} alt = ""/>
            <img className = "icon-github" src = {iconGithub} alt = ""/> 

        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
