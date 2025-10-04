/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#f8fafc',
          dark: '#0f172a',
        },
        text: {
          light: '#334155',
          dark: '#e2e8f0',
        },
        primary: {
          400: '#60a5fa',
          600: '#2563eb',
        },
        accent: {
          indigo: '#4f46e5',
          purple: '#7c3aed',
        },
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}