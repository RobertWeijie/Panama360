import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ScrollToTopButton from '../components/ScrollToTopButton';
import './Home.css';

function Home() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    <div className={`home ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>Bienvenido a la página de inicio</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/blog" className="card">
          <h2 className="text-2xl mb-4">Últimas publicaciones del blog</h2>
          <p className="mb-4">Sumérjase en diferentes perspectivas y obtenga las últimas noticias y conocimientos de la industria</p>
        </Link>
        <Link to="/weekly-video" className="card">
          <h2 className="text-2xl mb-4">Compartir videos semanalmente</h2>
          <p className="mb-4">Obtenga una comprensión intuitiva de los temas candentes de esta semana y vea contenido de video interesante</p>
        </Link>
        <Link to="/contact" className="card">
          <h2 className="text-2xl mb-4">Contáctenos</h2>
          <p className="mb-4">Si tiene alguna pregunta, no dude en contactarnos, estaremos encantados de atenderle</p>
        </Link>
        <Link to="/about" className="card">
          <h2 className="text-2xl mb-4">Sobre nosotros</h2>
          <p className="mb-4"></p>
        </Link>
      </div>
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {isDarkMode ? 'Cambiar al modo brillante' : 'Cambiar al modo oscuro'}
      </button>
      
      <ScrollToTopButton />
    </div>
  );
}

export default Home;