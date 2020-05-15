/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/!(tailwindcss-classnames).ts', './src/**/*.tsx', './src/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#2cc5d2',
        secondary: '#d3edf4',
      },
      inset: {
        '1/2': '50%',
      },
      boxShadow: (theme) => {
        return {
          checkbox: `${theme('colors.primary')} 0 0 0 1px inset`,
        };
      },
      minHeight: {
        '72': '18rem',
      },
      cursor: {
        progress: 'progress',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'first-child'],
    cursor: ['responsive', 'focus'],
  },
  plugins: [
    ({ addVariant, e }) => {
      addVariant('first-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-child${separator}${className}`)}:first-child`;
        });
      });
    },
  ],
};
