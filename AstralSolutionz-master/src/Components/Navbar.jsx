import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaInfoCircle, 
  FaBullseye, 
  FaSeedling,
  FaTrophy, 
  FaPhone
} from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';  // Import ScrollLink
import ResponsiveLogo from './ResponsiveLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'home', icon: <FaHome className="w-5 h-5" />, text: 'Home' },
    { to: 'about', icon: <FaInfoCircle className="w-5 h-5" />, text: 'About' },
    { to: 'vision-plan', icon: <FaSeedling className="w-5 h-5" />, text: 'Vision Plan' },
    { to: 'services', icon: <FaBullseye className="w-5 h-5" />, text: 'Services' },
    { to: 'projects', icon: <FaTrophy className="w-5 h-5" />, text: 'Projects' },
    { to: 'quotes', icon: <FaPhone className="w-5 h-5" />, text: 'Contact' }, 
  ];  

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden lg:flex items-center justify-between px-6 py-4 sticky top-0 transition-all duration-300 z-50 ${
          scrolled ? 'bg-[#2C3E50] shadow-md' : 'bg-[#2C3E50]'
        }`}
      >
        <Link to="/">
          <ResponsiveLogo
            scrolled={scrolled}
            className="transform hover:scale-105"
          />
        </Link>
        <div className="flex items-center space-x-6 text-[#00FFAB]">
          {navLinks.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}  // Adjust offset for scroll positioning
              className="flex items-center hover:text-[#B0BEC5] transform transition-transform duration-200 hover:scale-105 cursor-pointer"  // Added cursor-pointer
            >
              <span className="flex-shrink-0 mr-2">{link.icon}</span>
              <span>{link.text}</span>
            </ScrollLink>
          ))}
        </div>
      </nav>

      {/* Mobile Components */}
      <div className="lg:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#2C3E50] text-[#00FFAB] hover:bg-[#37474F]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Side Navbar */}
        <nav
          className={`fixed top-0 left-0 h-full w-64 bg-[#2C3E50] text-[#00FFAB] z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="block p-4 text-center border-b border-gray-300"
            onClick={() => setIsOpen(false)}
          >
            <ResponsiveLogo scrolled={false} className="mx-auto" />
          </Link>

          {/* Nav Links */}
          <div className="py-4">
            {navLinks.map((link, index) => (
              <ScrollLink
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}  // Adjust offset for scroll positioning
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 hover:text-[#B0BEC5] hover:bg-[#37474F] transform transition-transform duration-200 hover:scale-105 cursor-pointer"  // Added cursor-pointer
              >
                <span className="flex-shrink-0 w-6">{link.icon}</span>
                <span className="ml-3">{link.text}</span>
              </ScrollLink>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
