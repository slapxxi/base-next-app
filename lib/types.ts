import { defaultTheme } from './style/theme';

export type Theme = typeof defaultTheme;

export type WithTheme<P = {}> = { theme: Theme } & P;
