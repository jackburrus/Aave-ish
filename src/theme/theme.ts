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
    menuPurple: string;
    darkBackground: string;
    pink: string;
    otherPurple: string;
    borrowedRed: string;
    liquidGreen: string;
    greyish: string;
    linkBlue: string;
  }
}

export const darkTheme: DefaultTheme = {
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
  colors: {
    text: "#0A0A0A",
    background: "#FFF",
    border: "#E2E8F0",
    muted: "#F0F1F3",
    success: "#7DBE31",
    error: "#FC0021",
    info: "#00FFFF",
  },
  main: "#1b1d5b",
  darkerMain: "#151748",
  secondary: "pink",
  lightBlue: "#E2F2FD",
  lightBlueHighlight: "rgba(161, 244, 255, 0.6)",
  lightGreen: "#eafefd",
  lightGreenHighlight: "rgba(108, 218, 176, 0.6)",
  lightPurple: "#ddd3ee",
  darkPurple: "#472A64",
  menuPurple: "#cfc1e7",
  otherPurple: "	#7a49a5",
  darkBackground: "#281C40",
  pink: "#f5b0f7",
  borrowedRed: "#DE5758",
  liquidGreen: "#79C982",
  greyish: "#A0A5AA",
  linkBlue: "#0ca4ff",
};
