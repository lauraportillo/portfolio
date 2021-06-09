import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';

const Header = (props) => {
  return (
    <>
      <h1>laura portillo rodríguez</h1>
      <h3>From buildings to code, always structuring</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/about">About me</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
