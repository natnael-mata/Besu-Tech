/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#E63946', // Besu Red
                    dark: '#c42b37',
                    light: '#f26d78',
                },
                secondary: {
                    DEFAULT: '#1D3557', // Deep Navy
                    light: '#457b9d',
                },
                dark: '#121212', // Engineering Black
                light: '#F1FAEE', // Cool Gray
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
