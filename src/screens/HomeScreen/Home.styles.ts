import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const WalletContainer = styled.View`
  /* border: 2px solid black; */

  flex: 1;
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;
export const NewActionContainer = styled.View`
  flex-direction: row;
  /* flex: 1; */
`;

export const HomeContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: #1b1d5b;
  align-items: center;
`;

export const AssetsContainer = styled.View`
  /* border: 2px solid black; */

  flex: 2;
  width: ${width}px;
  align-items: center;
`;
