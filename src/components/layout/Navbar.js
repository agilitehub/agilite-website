import React, { useState, useEffect } from 'react';
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
    ${scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'}
  `;
  
  const navLinkClasses = "text-agilite-slate dark:text-white hover:text-agilite-red dark:hover:text-agilite-red transition-colors duration-300 font-medium";
  
  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center border-0">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Logo 
            showText={true} 
            size={scrolled ? "small" : "medium"}
          />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 items-center">
          <a href="#" className={navLinkClasses}>Home</a>
          <a href="#services" className={navLinkClasses}>Services</a>
          <a href="#about" className={navLinkClasses}>About</a>
          <a href="#team" className={navLinkClasses}>Team</a>
          <a href="#contact" className={navLinkClasses}>Contact</a>
          <a 
            href="https://agilite.io" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-4 px-5 py-2 bg-agilite-red hover:bg-agilite-red/90 text-white rounded-lg transition-colors duration-300 font-medium"
          >
            Login
          </a>
          <ThemeToggle className="ml-4" />
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <ThemeToggle className="mr-4" />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-agilite-slate dark:text-white"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`
          lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md 
          transition-all duration-300 transform overflow-hidden
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#" 
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a 
            href="#services" 
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#team" 
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Team
          </a>
          <a 
            href="#contact" 
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a 
            href="https://agilite.io" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-5 py-2 bg-agilite-red hover:bg-agilite-red/90 text-white rounded-lg transition-colors duration-300 font-medium w-fit"
            onClick={() => setIsOpen(false)}
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 