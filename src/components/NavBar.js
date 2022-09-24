import React from 'react';
import { NavLink  } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="menu">
      <NavLink  className="menu__item" activeClassName="menu__item_active" exact to="/">Домой</NavLink >
      <NavLink  className="menu__item" activeClassName="menu__item_active" to="/tips">Советы</NavLink >
    </nav>
  );
}

export default NavBar;