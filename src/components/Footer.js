import React from 'react';
import '../stylesheets/Footer.scss';

const Footer = () => {
  return (
    <footer className="containerFooter">
      <div>
        <a className="linkIcon" href="https://twitter.com/LauraPo02860847" target="_blank">
          <i className="fa fa-twitter" alt="twitter icon"></i>
        </a>
      </div>

      <div>
        <a
          className="linkIcon"
          href="https://www.linkedin.com/in/laura-portillo-rodr%C3%ADguez-21965a86/"
          target="_blank"
        >
          <i className="fa fa-linkedin" alt="linkedin icon"></i>
        </a>
      </div>

      <div>
        <a className="linkIcon" href="https://github.com/lauraportillo" target="_blank">
          <i className="fa fa-github-alt" alt="github icon"></i>
        </a>
      </div>

      <div>
        <a className="linkIcon" href="mailto:lauraportillo.ark@gmail.com" target="_blank">
          <i className="fa fa-envelope" alt="envelope icon"></i>
        </a>
      </div>
      <div>
        <small>By Laura Portillo Rodríguez</small>
        <small>©2021</small>
      </div>
    </footer>
  );
};

export default Footer;
