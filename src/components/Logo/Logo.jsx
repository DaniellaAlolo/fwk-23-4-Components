import LogoImage from './Logo.jpg';
import React from 'react';

const Logo = () => {
  return (
    <img
      src={LogoImage}
      alt="Logo"
      style={{ width: '200px', height: 'auto' }}
    />
  );
};

export default Logo;
