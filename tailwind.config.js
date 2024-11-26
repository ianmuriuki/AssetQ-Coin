/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9ddff',
          300: '#7cc2ff',
          400: '#36a5ff',
          500: '#0088ff',
          600: '#0066ff',
          700: '#0052cc',
          800: '#0040a3',
          900: '#003380',
        },
      },
    },
  },
  plugins: [],
};