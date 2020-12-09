import '@emotion/react';
import { Theme as DefaultTheme } from './lib/types';

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}
