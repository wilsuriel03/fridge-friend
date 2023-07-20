/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00050B', // black
        'primary-ligh': '#6F9D80', // light green
        'primary-dark': '#0B704E', // dark green
        'secondary': '#FB7712', // orange
        'secondary-light': '#FB8B01', // light orange
        'secondary-dark': '#F34509', // dark orange
        'light-text': '#9A9EA6', // light grey
      },
    },
  },
  plugins: [],
};
