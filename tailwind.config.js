/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // CV-inspired color palette
        'cv': {
          'primary': '#334155',      // Dark slate - header/navbar
          'accent': '#c8d4e3',        // Soft steel blue - accents
          'bg': '#f1f5f9',            // Light gray - main background
          'card': '#ffffff',          // White - card backgrounds
          'sidebar': '#e8ecf0',       // Light gray - sidebar/sections
          'text': '#1e293b',          // Dark charcoal - primary text
          'text-secondary': '#64748b', // Gray - secondary text
          'border': '#cbd5e1',        // Light border color
        }
      }
    },
  },
  plugins: [],
}


