/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'yoshi-green': '#398123',
        'yoshi-red': '#b00033',
        'yoshi-blue': '#1a2a5f ',
        'yoshi-yellow': '#e1e54B',
        'yoshi-pink': '#f08B8F ',
        'yoshi-cyan': '#65d3dc'
      }
    },
  },
  safelist: [
    'bg-gray-600'
  ],
  plugins: [],
};
