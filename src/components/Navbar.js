import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" end>
          Página de inicio 🇵🇦
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/weekly-video">
          Videos semanalmente
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">
          Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
          Contáctenos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
          Sobre nosotros
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;