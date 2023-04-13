import { DefaultTheme } from 'styled-components';
import { themes } from './variables';

declare module 'styled-components' {
  export interface DefaultTheme {
    themes: typeof themes;
  }
}

export const myTheme: DefaultTheme = {
    themes: themes,
};