/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'naturalSilver': '#F5F7FA',
        'naturalDGrey': '#4D4D4D',
        'naturalPrimary': '#373690',
        'naturalGrey': '#717171',
        'gray900': '#18191F',
      }
    },
  },
  plugins: [ require('flowbite/plugin'),],
};
