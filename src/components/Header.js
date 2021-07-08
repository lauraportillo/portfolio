import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';

const Header = (props) => {
  return (
    <header className="containerHeader">
      <h1 className="containerHeader__title">laura portillo</h1>
      <nav>
        <ul className="menu">
          <li className="menu__item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu__item">|</li>
          <li className="menu__item">
            <Link to="/about">About me</Link>
          </li>
          <li className="menu__item">|</li>
          <li className="menu__item">
            <a className="menu__item--icon" href="https://twitter.com/LauraPo02860847" target="_blank">
              <i className="fa fa-twitter" alt="twitter icon"></i>
            </a>
          </li>
          <li className="menu__item">
            <a
              className="menu__item--icon"
              href="https://www.linkedin.com/in/laura-portillo-rodr%C3%ADguez-21965a86/"
              target="_blank"
            >
              <i className="fa fa-linkedin" alt="linkedin icon"></i>
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__item--icon" href="https://github.com/lauraportillo" target="_blank">
              <i className="fa fa-github-alt" alt="github icon"></i>
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__item--icon" href="mailto:lauraportillo.ark@gmail.com" target="_blank">
              <i className="fa fa-envelope" alt="envelope icon"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
