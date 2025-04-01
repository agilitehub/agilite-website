import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navbarClasses = `
    fixed w-full z-50 transition-all duration-300 
    ${scrolled 
      ? 'bg-gradient-to-r from-white via-white to-agilite-red/5 dark:from-gray-900 dark:via-gray-900 dark:to-agilite-red/10 shadow-lg border-b-2 border-agilite-red/20 dark:border-agilite-red/30 py-2' 
      : 'bg-gradient-to-r from-white via-white to-agilite-red/10 dark:from-gray-900 dark:via-gray-900 dark:to-agilite-red/20 shadow-md border-b-2 border-transparent py-4'
    }
  `;
  
  const navLinkClasses = "text-gray-800 dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-all duration-300 font-semibold relative group px-2 py-1";
  
  const navLinkBarClasses = "absolute bottom-0 left-0 w-0 h-0.5 bg-agilite-red transition-all duration-300 group-hover:w-full rounded-full";
  
  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo 
            showText={true} 
            size={scrolled ? "small" : "medium"}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link to="/" className={navLinkClasses}>
            Home
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link to="/#services" className={navLinkClasses}>
            Services
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link to="/#about" className={navLinkClasses}>
            About
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link to="/#team" className={navLinkClasses}>
            Team
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link to="/changelog" className={navLinkClasses}>
            Changelog
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link to="/roadmap" className={navLinkClasses}>
            Roadmap
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link to="/#contact" className={navLinkClasses}>
            Contact
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link 
            to="/login"
            className="ml-4 px-5 py-2 bg-agilite-red hover:bg-agilite-red/90 text-white rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Login
          </Link>
          <ThemeToggle className="ml-4" />
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <ThemeToggle className="mr-4" />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors duration-300"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`
          lg:hidden absolute top-full left-0 w-full bg-gradient-to-b from-white via-white to-agilite-red/5 dark:from-gray-900 dark:via-gray-900 dark:to-agilite-red/10 shadow-lg border-b-2 border-agilite-red/20 dark:border-agilite-red/30
          transition-all duration-300 transform overflow-hidden
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Home
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link 
            to="/#services" 
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Services
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link 
            to="/#about" 
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            About
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link 
            to="/#team" 
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Team
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link 
            to="/changelog" 
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Changelog
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link 
            to="/roadmap" 
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Roadmap
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link 
            to="/#contact" 
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Contact
            <span className={navLinkBarClasses}></span>
          </Link>
          <Link 
            to="/login"
            className="px-5 py-2 bg-agilite-red hover:bg-agilite-red/90 text-white rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 w-fit"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 