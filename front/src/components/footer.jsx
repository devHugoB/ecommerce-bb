import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        Copyright © {new Date().getFullYear()} Ecommerce BB - Crée par <strong className="copyright__author">Hugo Bollaert</strong> &  <strong className="copyright__author">Yannis Bonne</strong>
      </div>
    </footer>
  );
};

export default Footer;
