import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    to,
    href,
    className = '',
    type = 'button',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-black uppercase tracking-widest transition-all duration-300 leading-none h-fit";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]",
        secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 hover:scale-[1.02]",
        outline: "bg-white text-secondary border border-gray-200 hover:border-primary hover:text-primary shadow-sm hover:shadow-md hover:scale-[1.02]",
        ghost: "bg-transparent text-primary hover:bg-primary/5 shadow-none",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    // Helper to handle clicks on anchor links
    const handleClick = (e) => {
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (props.onClick) props.onClick(e);
    };

    if (to) {
        return (
            <Link to={to} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedClassName} onClick={handleClick} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={combinedClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;
