import React from 'react';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden p-6 border border-gray-100 
      ${hoverEffect ? 'transition-transform duration-300 hover:shadow-xl hover:-translate-y-1' : ''} 
      ${className}`}>
            {children}
        </div>
    );
};

export default Card;
