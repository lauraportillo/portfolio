import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';

const Header = (props) => {
  return (
    <header className="containerHeader">
      <h1 className="containerHeader__title">laura portillo</h1>
      <h3 className="containerHeader__subtitle">From buildings to code, always structuring</h3>
      <nav>
        <ul className="menu">
          <li className="menu__item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu__item">|</li>
          <li className="menu__item">
            <Link to="/about">About me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
