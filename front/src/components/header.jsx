import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav__brand">Ecommerce BB</Link>

        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/connexion" className="nav__link">Connexion</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/connexion" className="nav__link">Inscription</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
