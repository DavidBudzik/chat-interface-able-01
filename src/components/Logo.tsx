import React from 'react';
import './Logo.css';
import ableLogoSvg from '../assets/able-logo.svg';

export const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={ableLogoSvg} alt="Able Logo" className="logo" />
    </div>
  );
};

