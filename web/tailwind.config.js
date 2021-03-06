module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      sans: ['Forum', 'cursive']
    },
    extend: {
      colors: {
        'site-grey': '#444444',
        'footer-yellow': '#ffeebc',
        'bronzetone': '#554412',
        'dark-green-copper':'#3f7652',
        'dark-blue': '#162E67'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
],
}
