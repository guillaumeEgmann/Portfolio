import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo-Guillaume EGMANN-blanc.png'
import { FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Détecte si on est en mode mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Gère le scroll uniquement en mode mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      // Bloque le scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Restaure le scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen, isMobile]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"  onClick={toggleMenu}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>


        {/* Hamburger en mode mobile */}
        {isMobile && (
          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        )}
      </div>
      
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/project1" className="nav-link" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/About" className="nav-link" onClick={toggleMenu}>About</Link></li>
      
      </ul>
      <a 
        href="https://www.linkedin.com/in/guillaume-egmann-b73134202/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        <FaLinkedin size={24} />
      </a>
    </nav>
  )
}

export default Navbar
