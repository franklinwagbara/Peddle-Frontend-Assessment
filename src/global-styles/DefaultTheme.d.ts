import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      secondary: string;
      white: string;
      black: string;
    };
  }
}
