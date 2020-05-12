import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import '../src/assets/index.css';

addParameters({
  options: {
    theme: themes.dark,
  },
});
