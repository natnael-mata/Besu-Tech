import React from 'react';

const SectionTitle = ({ title, subtitle, centered = true, className = '' }) => {
    const titleColor = className.includes('text-white') ? 'text-white' : 'text-secondary';

    return (
        <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
            {subtitle && (
                <span className="block text-primary font-black tracking-widest uppercase text-xs mb-3">
                    {subtitle}
                </span>
            )}
            <h2 className={`text-4xl md:text-5xl font-heading font-black mb-6 ${titleColor} tracking-tighter shadow-sm`}>
                {title}
            </h2>
            <div className={`h-1.5 w-24 bg-primary rounded-full ${centered ? 'mx-auto' : ''}`}></div>
        </div>
    );
};

export default SectionTitle;
