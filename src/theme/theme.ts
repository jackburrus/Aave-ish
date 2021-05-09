import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    secondary: string;
    lightGreen: string;
    lightBlue: string;
    lightPurple: string;
  }
}

export const darkTheme: DefaultTheme = {
  main: "#1b1d5b",
  secondary: "pink",
  lightBlue: "#E2F2FD",
  lightGreen: "#eafefd",
  lightPurple: "#ddd3ee",
};
