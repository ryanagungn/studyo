module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mapel': "url('./assets/mapel.png')",
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
