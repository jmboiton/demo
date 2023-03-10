const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      condensed: ['Roboto Condensed', ...defaultTheme.fontFamily.serif],
      sans: ['Roboto', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      'xs': '0.6875rem', // 11px
      '2xs': '0.75rem', // 12px
      'sm': '0.8125rem', // 13px
      '2sm': '0.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.0625rem', // 17px
      '2lg': '1.25rem', // 20px
      '3lg': '1.375rem', // 22px
      '4lg': '1.5rem', // 24px
      '5lg': '1.625rem', // 26px
      'xl': '1.75rem', // 28px
      '2xl': '1.875rem', // 30px
      '3xl': '2rem', // 32px
      '4xl': '3rem' // 48px
    },
    letterSpacing: {
      '0': '0em',
      '1': '0.01em',
      '2': '0.02em',
      '3': '0.03em',
      '4': '0.06em',
      '5': '0.22em',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#222222',
      beige: {
        100: '#F4EEE5',
        200: '#E9E4DB'
      },
      green: {
        100: '#9CAF96',
        200: '#7E836D'
      },
      red: {
        100: '#EADAD8',
        200: '#DA8464',
        300: '#BD6158'
      },
      blue: {
        100: '#DEE1E4',
        200: '#A9C9E1', 
        300: '#5E99C2'
      },
      gray: '#D2C6C3',
      yellow: '#EEB426',
      orange: '#F98A3C',
      pink: '#D4A1A6',
      chocolate: '#C47D30',
      purple: {
        100: '#DED8E0',
        200: '#A686B1',
      }
    },
    extend: {
      lineHeight: {
        'tighter': '1.1',
        '2tight': '1.3'
      },
      width: {
        '38': '9.375rem' // 150px
      },
      flexBasis: {
        '38': '9.375rem' // 150px
      },
      spacing: {
        '13': '3.375rem', // 54px
        '21': '5.5rem'
      },
      zIndex: {
        '1': '1',
        '2': '2'
      },
      rotate: {
        '4': '4deg',
        '8': '8deg',
      }
    }
  },
  plugins: []
}
