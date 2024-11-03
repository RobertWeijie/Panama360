import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MainNav.css';

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <Link to="/">我的个人网站</Link>
      </div>
      
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className={isActive('/') ? 'active' : ''}>
        Página principal
        </Link>
        <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>
        Blog
        </Link>
        <Link to="/weekly-video" className={isActive('/weekly-video') ? 'active' : ''}>
        Video semanal
        </Link>
        <Link to="/about" className={isActive('/about') ? 'active' : ''}>
        Sobre nosotros
        </Link>
        <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
        Contáctenos
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;