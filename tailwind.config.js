/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'moal-green': '#2bb673',
        'moal-yellow': '#ffb81c',
        'moal-light-blue-1': '#25aae1',
        'moal-light-blue-2': '#9aceef',
        'moal-dark-blue-1': '#00002e',
        'moal-dark-blue-2': '#001e54'
      }
    },
  },
  safelist: [
    'bg-gray-600'
  ],
  plugins: [],
};
