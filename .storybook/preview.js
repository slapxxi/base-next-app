import { css, Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import { darkTheme, defaultTheme } from '../lib/style/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

defaultTheme;
darkTheme;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ margin: '3em' }}>
        <Global
          styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

            :root {
              --bg-opacity: 1;
              --border-opacity: 1;
              --text-opacity: 1;
              --shadow-opacity: 0.3;
            }

            body {
              font-family: Nunito, sans-serif;
            }
          `}
        ></Global>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
