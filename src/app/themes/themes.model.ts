// Variables
export const THEME = 'theme';
export const MAIN_COLOR = 'mainColor';

/**
 * @description Example:
 * {
    name: 'light,
    properties: {
      '--gray-00': '#F8F9FB',
    }
  }
 */
export interface Theme {
  name: string;
  properties: {
    [key: string]: string;
  };
}

/**
 * @description available themes list
 */
export enum ThemeList {
  Light = 'light',
  Dark = 'dark',
  Brown = 'brown'
}
