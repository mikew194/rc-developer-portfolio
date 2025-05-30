import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-16 h-16',
};

const Spinner: React.FC<SpinnerProps> = ({ size = 'lg', color = 'blue' }) => (
  <div
    className={`animate-spin rounded-full border-4 border-t-transparent ${sizeClasses[size]}`}
    style={{ borderColor: color }}
    role="status"
  >
    <span className="sr-only">Loading...</span>
  </div>
);

export default Spinner;