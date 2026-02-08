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
        terminal: {
          green: '#00ff41',
          'green-light': '#66ff66',
          'green-dark': '#00cc33',
          'green-glow': '#00ff4180',
        },
        dark: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          border: '#2a2a2a',
          text: {
            primary: '#e5e5e5',
            secondary: '#a3a3a3',
            accent: '#00ff41',
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
