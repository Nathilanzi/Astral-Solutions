import React, { useState, useEffect } from 'react';

const ResponsiveLogo = ({ scrolled, className = '' }) => {
  const [dimensions, setDimensions] = useState({
    width: scrolled ? '180px' : '240px',
    height: scrolled ? '48px' : '64px'
  });

  useEffect(() => {
    setDimensions({
      width: scrolled ? '180px' : '240px',
      height: scrolled ? '48px' : '64px'
    });
  }, [scrolled]);

  return (
    <div 
      className={`transition-all duration-300 ease-in-out ${className}`}
      style={{
        width: dimensions.width,
        height: dimensions.height
      }}
    >
      <img
        src="/images/AstralSolutionsLogo1.jpg"
        alt="Logo"
        className="w-full h-full object-contain transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

export default ResponsiveLogo;