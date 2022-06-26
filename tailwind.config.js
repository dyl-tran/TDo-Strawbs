/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
    },

    fontFamily: {
      title: ['Dancing Script'],
      body: ['Martel'],
      paragraph: ['Abhaya Libre'],
      hero: ['Courgette']
    }
  },
  plugins: [],
}
}
