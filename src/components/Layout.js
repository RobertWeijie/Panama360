import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import './Layout.css';

function Layout({ children }) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`layout ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? '🌞' : '🌙'}
      </button>
      {children}
      <ScrollToTop />
    </div>
  );
}

export default Layout;