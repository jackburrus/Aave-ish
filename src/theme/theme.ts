import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    darkerMain: string;
    secondary: string;
    lightGreen: string;
    lightBlue: string;
    lightPurple: string;
    darkPurple: string;
    darkBackground: string;
    pink: string;
    otherPurple: string;
    borrowedRed: string;
    liquidGreen: string;
  }
}

export const darkTheme: DefaultTheme = {
  main: "#1b1d5b",
  darkerMain: "#151748",
  secondary: "pink",
  lightBlue: "#E2F2FD",
  lightGreen: "#eafefd",
  lightPurple: "#ddd3ee",
  darkPurple: "#472A64",
  otherPurple: "	#7a49a5",
  darkBackground: "#281C40",
  pink: "#f5b0f7",
  borrowedRed: "#DE5758",
  liquidGreen: "#79C982",
};
