import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    darkerMain: string;
    secondary: string;
    lightGreen: string;
    lightGreenHighlight: string;
    lightBlue: string;
    lightBlueHighlight: string;
    lightPurple: string;
    darkPurple: string;
    darkBackground: string;
    pink: string;
    otherPurple: string;
    borrowedRed: string;
    liquidGreen: string;
    greyish: string;
  }
}

export const darkTheme: DefaultTheme = {
  main: "#1b1d5b",
  darkerMain: "#151748",
  secondary: "pink",
  lightBlue: "#E2F2FD",
  lightBlueHighlight: "rgba(161, 244, 255, 0.6)",
  lightGreen: "#eafefd",
  lightGreenHighlight: "rgba(108, 218, 176, 0.6)",
  lightPurple: "#ddd3ee",
  darkPurple: "#472A64",
  otherPurple: "	#7a49a5",
  darkBackground: "#281C40",
  pink: "#f5b0f7",
  borrowedRed: "#DE5758",
  liquidGreen: "#79C982",
  greyish: "#A0A5AA",
};
