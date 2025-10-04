module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        bg: {
          light: '#f9fafb',
          dark: '#0f172a',
        },
        text: {
          light: '#111827',
          dark: '#f9fafb',
        },
        accent: {
          blue: '#3b82f6',
          purple: '#9333ea',
          indigo: '#6366f1',
          pink: '#f472b6',
        },
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        soft: '0 6px 20px rgba(2,6,23,0.08)',
        softDark: '0 8px 30px rgba(2,6,23,0.6)'
      }
    },
  },
  plugins: [],
}
