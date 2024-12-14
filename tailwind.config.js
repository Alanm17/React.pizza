/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JS/TS files in the `src` folder
    "./public/index.html", // If you're using Create React App or a similar setup
  ],
  theme: {
    extend: {}, // Use this to add custom styles
  },
  plugins: [], // Add Tailwind plugins here if needed
};
