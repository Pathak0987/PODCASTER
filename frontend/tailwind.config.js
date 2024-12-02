/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Make sure this points to your HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Scans JS/TS/JSX/TSX files inside the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
