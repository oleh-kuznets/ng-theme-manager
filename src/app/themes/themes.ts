import { Theme, ThemeList } from './themes.model';

const staticPalette = {
  '--indigo-50': '#8585F2',
  '--red-50': '#F06452',
  '--orange-50': '#F96D41',
  '--magenta-50': '#EE538B'
};

export const themes: Theme[] = [
  {
    name: ThemeList.Light,
    properties: {
      '--bg': '#FFFFFF',
      '--text': '#000000',

      // Static
      ...staticPalette
    }
  },
  {
    name: ThemeList.Dark,
    properties: {
      '--bg': '#000000',
      '--text': '#FFFFFF',

      // Static
      ...staticPalette
    }
  },
  {
    name: ThemeList.Brown,
    properties: {
      '--bg': '#5E2C04',
      '--text': '#FFFFFF',

      // Static
      ...staticPalette
    }
  }
];
