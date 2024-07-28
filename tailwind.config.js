const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  // darkMode: ['class'],
  // safelist: ['dark'],
  // prefix: '',

  content: [
    './pages/**/*.{js,jsx,vue}',
    './components/**/*.{js,jsx,vue}',
    './app/**/*.{js,jsx,vue}',
    './src/**/*.{js,jsx,vue}'
  ],

  theme: {
    // container: {
    //   center: true,
    //   padding: '2rem',
    //   screens: {
    //     '2xl': '1400px'
    //   }
    // },
    extend: {
      colors: {
        primary: '#F4B41A',
        accent: '#143D59',
        secondary: '#141517',
        text: '#1A1B1E',
        gray: '#696E79',
        placeholder: '#A0A0A0',
        background: '#F9F9F9',
        disabled: '#E2E2E2',
        modal: '#FBFBFB',
        success: '#37B24D',
        error: '#FF0000'
      },
      fontFamily: {
        mainFont: ['"Fredoka"', 'sans-serif']
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [animate]
}
