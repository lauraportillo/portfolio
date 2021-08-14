import React from 'react';
import '../stylesheets/Footer.scss';

const Footer = () => {
  return (
    <footer className="containerFooter">
      <div className="containerFooter__copy">
        <a
          className="containerFooter__copy--link"
          href="https://www.linkedin.com/in/laura-portillo-rodr%C3%ADguez-21965a86/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Laura Portillo Rodríguez
        </a>

        {/* <small>©2021</small> */}
      </div>
    </footer>
  );
};

export default Footer;
