/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/!(tailwindcss-classnames).ts', './src/**/*.tsx', './src/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#2cc5d2',
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
    },
  },
  variants: {
    cursor: ['responsive', 'focus'],
  },
};
