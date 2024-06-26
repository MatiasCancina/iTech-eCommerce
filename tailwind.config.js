/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'navBtnHover': '#1d3557',
      'darkBlue': '#002855',
      'blueLink': '#0d41e1',
      'cyan': '#457b9d',
      'lightBue': '#a8dadc',
      'white': '#f8f9fa',
      'red': '#d90429',
      'black': '#000814',
      'borderGray': '#e5e5e5',
      'gray': '#6c757d'
    },

  },
  plugins: [],
};
