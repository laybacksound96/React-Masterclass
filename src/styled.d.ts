import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    cotrastColor: string;
    bgColor: string;
    accentColor: string;
    subColor: string;
  }
}
