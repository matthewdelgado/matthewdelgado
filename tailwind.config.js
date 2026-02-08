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
        dark: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          border: '#2a2a2a',
          text: {
            primary: '#e5e5e5',
            secondary: '#a3a3a3',
            accent: '#3b82f6',
          }
        },
        light: {
          bg: '#ffffff',
          surface: '#f8f9fa',
          border: '#e5e7eb',
          text: {
            primary: '#1a1a1a',
            secondary: '#6b7280',
            accent: '#3b82f6',
          }
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.dark.text.primary'),
            a: {
              color: theme('colors.dark.text.accent'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
