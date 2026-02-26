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
        accent: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
        },
        dark: {
          bg: '#0a0a0a',
          surface: '#111111',
          'surface-light': '#1a1a1a',
          border: '#1f1f1f',
          text: {
            primary: '#e5e5e5',
            secondary: '#a3a3a3',
            accent: '#38bdf8',
          }
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.dark.text.primary'),
            a: {
              color: theme('colors.accent.cyan'),
              '&:hover': {
                color: theme('colors.accent.blue'),
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
