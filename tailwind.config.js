/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.mdx"], // Scan these files for classes
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Important for Docusaurus to avoid style conflicts
  },
  darkMode: ['class', '[data-theme="dark"]'], // Hook into Docusaurus dark mode
};