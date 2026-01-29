/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                inria: ["Inria Serif", "serif"],
                lekton: ["Lekton", "sans-serif"],
                worksans: ["Work Sans", "serif"],
                sanchez: ['Sanchez', 'serif'],
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
            animation: {
                "fade-in": "fade-in 0.0s ease-in",
            },
        },
    },
    plugins: [],
};
