const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mukta: [`Mukta`, ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require(`@tailwindcss/typography`),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: `Mukta`,
            src: `url("/fonts/Mukta-Light.ttf")`,
            fontStyle: `light`,
            fontWeight: `300`,
            fontDisplay: `swap`,
          }
        },
        {
          '@font-face': {
            fontFamily: `Mukta`,
            src: `url("/fonts/Mukta-Regular.ttf")`,
            fontStyle: `normal`,
            fontWeight: `400`,
            fontDisplay: `swap`,
          }
        },
        {
          '@font-face': {
            fontFamily: `Mukta`,
            src: `url("/fonts/Mukta-Bold.ttf")`,
            fontStyle: `bold`,
            fontWeight: `700`,
            fontDisplay: `swap`,
          }
        },
        {
          '@font-face': {
            fontFamily: `Mukta`,
            src: `url("/fonts/Mukta-ExtraBold.ttf")`,
            fontStyle: `extra-bold`,
            fontWeight: `800`,
            fontDisplay: `swap`,
          }
        },
      ])
    },
  ],
}
