import React from 'react';

const Logo = ({ className = "h-8 md:h-12" }) => {
    return (
        <svg
            viewBox="0 0 400 150"
            className={`${className} w-auto`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* The "BE" text */}
            <text
                x="10"
                y="90"
                className="font-heading font-black italic"
                fill="#E63946"
                style={{ fontSize: '100px', letterSpacing: '-5px' }}
            >
                BE
            </text>

            {/* The Lightning Bolt */}
            <path
                d="M230 10L190 85H230L170 145L210 70H170L230 10Z"
                fill="#E63946"
            />

            {/* The "U" text */}
            <text
                x="240"
                y="90"
                className="font-heading font-black italic"
                fill="#E63946"
                style={{ fontSize: '100px' }}
            >
                U
            </text>

            {/* The "TECH" text */}
            <text
                x="245"
                y="130"
                className="font-heading font-bold italic"
                fill="#E63946"
                style={{ fontSize: '35px', letterSpacing: '8px' }}
            >
                TECH
            </text>
        </svg>
    );
};

export default Logo;
