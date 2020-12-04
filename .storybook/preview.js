import { css, Global } from '@emotion/react';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

          body {
            font-family: Nunito, sans-serif;
          }
        `}
      ></Global>
      <Story />
    </div>
  ),
];
