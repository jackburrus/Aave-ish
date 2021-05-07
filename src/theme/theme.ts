import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    secondary: string;
  }
}

export const darkTheme: DefaultTheme = {
  main: "#31346B",
  secondary: "pink",
};
