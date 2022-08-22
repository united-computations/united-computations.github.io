const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        secondary: 'rgba(249, 250, 251, 0.54)',
        tertiary: colors.zinc['700'],
        dark: '#26252C',
        midnight: colors.zinc['900']
      },
      animation: {
        blink: 'blink 1s infinite'
      },
      keyframes: {
        blink: {
          '0%, 40%': { opacity: '100%' },
          '50%, 90%': { opacity: '0%' }
        }
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
  },
  plugins: [],
}
