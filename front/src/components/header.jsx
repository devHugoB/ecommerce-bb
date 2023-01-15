import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import {CartContext} from "../context/CartContext";

const Header = () => {
  const {cart} = useContext(CartContext);

  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav__brand">Ecommerce BB</Link>

        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/connexion" className="nav__link">Connexion</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/inscription" className="nav__link">Inscription</NavLink>
          </li>
          <li className="nav__item">
            Panier({cart.length})
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
