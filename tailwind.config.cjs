/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        'sm': '900px'
      },
      spacing: {
        '0.5': '0.3rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '8': '8rem',
        '10': '10rem',
        '15': '15rem',
        '30': '30vw',
        '50': '50%',
        '85': '85%',
        '90': '90%'
      },
      fontSize: {
        'xs': '1.4rem',
        'sm': '1.6rem',
        'md': '1.8rem',
        'lg': '2.4rem',
        'base': '3.2rem',
        'xl': '4.2rem'
      },
      borderRadius: {
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem'
      },
      letterSpacing: {
        'widest': '0.3rem'
      },
      colors: {
        blue: {
          DEFAULT: 'hsl(233, 26%, 24%)',
          '100': 'hsl(220, 16%, 96%)',
          '200': 'hsl(233, 8%, 62%)'
        },
        'green': 'hsl(136, 65%, 51%)',
        'cyan': 'hsl(192, 70%, 51%)',
        'gray': 'hsl(0, 0%, 98%)'
      },
      boxShadow: {
        'sm': '0 0.3rem 1rem 0.1rem hsl(0, 0%, 60%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

