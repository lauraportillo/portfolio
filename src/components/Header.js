import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';

const Header = (props) => {
  return (
    <header className="containerHeader">
      <div className="containerHeader__title">
        <h1 className="containerHeader__title--1">laura portillo</h1>
        <h2 className="containerHeader__title--2">front-end developer</h2>
      </div>

      <nav className="containerHeader__nav">
        <ul className="menu1">
          <li className="menu1__item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu1__item">|</li>
          <li className="menu1__item">
            <Link to="/aboutEn">About me</Link>
          </li>
          <li className="menu1__item--none">|</li>
        </ul>

        <ul className="menu2">
          <li className="menu2__item">
            <a
              className="menu2__item--icon"
              href="https://twitter.com/LauraPo02860847"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter" alt="twitter icon"></i>
            </a>
          </li>
          <li className="menu2__item">
            <a
              className="menu2__item--icon"
              href="https://www.linkedin.com/in/laura-portillo-rodr%C3%ADguez-21965a86/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin" alt="linkedin icon"></i>
            </a>
          </li>
          <li className="menu2__item">
            <a
              className="menu2__item--icon"
              href="https://github.com/lauraportillo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github-alt" alt="github icon"></i>
            </a>
          </li>
          <li className="menu2__item">
            <a
              className="menu2__item--icon"
              href="mailto:lauraportillo.ark@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-envelope" alt="envelope icon"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
