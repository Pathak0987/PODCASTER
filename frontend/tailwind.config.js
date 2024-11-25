/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Make sure `.jsx` and `.tsx` are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Disable purge in development (for testing)
  mode: 'jit',
}
