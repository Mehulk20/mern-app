/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            height: {
                screen: '100dvh',
                fontSize: {
                    'fluid-xs': 'clamp(0.75rem, 1.8vw, 0.875rem)', // Small text (12px-14px)
                    'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)', // Body text (14px-16px)
                    'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)', // Main body (16px-18px)
                    'fluid-md': 'clamp(1.25rem, 3vw, 1.5rem)', // Subheadings (20px-24px)
                    'fluid-lg': 'clamp(1.5rem, 4vw, 2rem)', // Section titles (24px-32px)
                    'fluid-xl': 'clamp(2rem, 5vw, 2.5rem)', // Main Headings (32px-40px)
                    'fluid-2xl': 'clamp(2.5rem, 6vw, 3.5rem)', // Hero text (40px-56px)
                },
            },
        },
    },
    plugins: [],
}
