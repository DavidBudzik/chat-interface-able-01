import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'spinner' | 'dots';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  variant = 'spinner',
  className = ''
}) => {
  if (variant === 'dots') {
    return (
      <div className={`loading-dots ${className}`}>
        <div className="loading-dots__dot"></div>
        <div className="loading-dots__dot"></div>
        <div className="loading-dots__dot"></div>
      </div>
    );
  }

  return (
    <div 
      className={`loading-spinner loading-spinner--${size} ${className}`}
      aria-label="Loading"
      role="status"
    />
  );
};
