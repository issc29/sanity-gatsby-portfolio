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
      animation: {
        marquee: 'marquee 3s linear infinite alternate' ,
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(var(--scroll-distance))' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
],
}
