import { Theme } from '../types';

export let defaultTheme = {
  type: 'light',
  colors: {
    // Button
    bgButtonPrimary: 'hsla(40, 100%, 50%, var(--bg-opacity))',
    bgButtonSecondary: 'hsla(40, 10%, 80%, var(--bg-opacity))',
    bgButtonLifted: 'hsla(40, 10%, 98%, var(--bg-opacity))',
    bgButtonHover: 'hsla(40, 15%, 20%, var(--bg-opacity))',
    textButton: 'hsla(40, 15%, 20%, var(--text-opacity))',
    textButtonHover: 'hsla(40, 15%, 95%, var(--text-opacity))',
    shButton: `hsla(40, 10%, 30%, var(--shadow-opacity))`,
    // Badge
    bgBadgePrimary: 'hsla(40, 100%, 45%, var(--bg-opacity))',
    bgBadgeSecondary: 'hsla(40, 5%, 70%, var(--bg-opacity))',
    bgBadgeLifted: 'hsla(40, 10%, 99%, var(--bg-opacity))',
    // Star
    bgStar: 'hsla(50, 10%, 80%, var(--bg-opacity))',
    bgStarActive: 'hsla(50, 100%, 50%, var(--bg-opacity))',
    bgStarHover: 'hsla(50, 100%, 75%, var(--bg-opacity))',
    // Input
    bgInputPrimary: 'hsla(40, 100%, 99%, var(--bg-opacity))',
    borderInputPrimary: 'hsla(45, 10%, 80%, var(--bg-opacity))',
    bgInputHover: 'hsla(40, 15%, 20%, var(--bg-opacity))',
    textInput: 'hsla(45, 8%, 55%, var(--bg-opacity))',
    textInputHover: 'hsla(40, 15%, 90%, var(--bg-opacity))',
    // Tag
    bgTag: 'hsla(40, 10%, 92%, var(--bg-opacity))',
    bgTagHot: 'hsla(1, 91%, 47%, var(--bg-opacity))',
    textTagHot: 'hsla(1, 100%, 95%, var(--bg-opacity))',
    // Notice
    bgNotice: 'hsla(40, 15%, 95%, var(--bg-opacity))',
    // List
    bgListMarker: 'hsla(40, 5%, 80%, var(--bg-opacity))',
    // Generic
    bgItem: 'hsla(40, 10%, 99%, var(--bg-opacity))',
    borderItem: 'hsla(40, 10%, 90%, var(--border-opacity))',
    textItem: 'hsla(40, 10%, 2%, var(--text-opacity))',
    textSecondary: 'hsla(40, 2%, 50%, var(--text-opacity))',
  },
};

export let darkTheme: Theme = {
  type: 'dark',
  colors: {
    ...defaultTheme.colors,
    // Button
    bgButtonPrimary: 'hsla(40, 5%, 40%, var(--bg-opacity))',
    bgButtonSecondary: 'hsla(40, 10%, 80%, var(--bg-opacity))',
    bgButtonLifted: 'hsla(40, 10%, 98%, var(--bg-opacity))',
    bgButtonHover: 'hsla(40, 15%, 20%, var(--bg-opacity))',
    textButton: 'hsla(40, 15%, 90%, var(--text-opacity))',
    textButtonHover: 'hsla(40, 15%, 95%, var(--text-opacity))',
    shButton: `hsla(40, 10%, 30%, var(--shadow-opacity))`,
    // Badge
    bgBadgePrimary: 'hsla(40, 100%, 45%, var(--bg-opacity))',
    bgBadgeSecondary: 'hsla(40, 5%, 70%, var(--bg-opacity))',
    bgBadgeLifted: 'hsla(40, 10%, 99%, var(--bg-opacity))',
    // Star
    bgStar: 'hsla(50, 5%, 30%, var(--bg-opacity))',
    bgStarActive: 'hsla(50, 100%, 50%, var(--bg-opacity))',
    bgStarHover: 'hsla(50, 100%, 75%, var(--bg-opacity))',
    // Generic
    bgItem: 'hsla(40, 5%, 10%, var(--bg-opacity))',
    borderItem: 'hsla(40, 10%, 2%, var(--border-opacity))',
    textItem: 'hsla(40, 10%, 90%, var(--text-opacity))',
    textSecondary: 'hsla(40, 5%, 50%, var(--text-opacity))',
  },
};
