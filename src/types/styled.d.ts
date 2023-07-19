import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      block: string;
      blockBorder: string;
      formBorder: string;
      primary: string;
      detail: string;
      error: string;
      text: string;
    };
  }
}
