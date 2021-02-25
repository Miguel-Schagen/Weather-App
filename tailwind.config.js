module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        gridTemplateColumns: {
            'weather': '2fr 8fr 2fr',
        },
        spacing:{
            '128':  '32rem',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
