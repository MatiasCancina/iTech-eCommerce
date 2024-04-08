/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'darkBlue': '#1d3557',
      'navBtnHover': '#002855',
      'cyan': '#457b9d',
      'lightBue': '#a8dadc',
      'white': '#f8f9fa',
      'red': '#ff002b',
    },

  },
  plugins: [],
};
