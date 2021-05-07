import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const WalletContainer = styled.View`
  /* border: 1px solid black; */
  height: 100px;
  width: ${width}px;
`;
export const NewActionContainer = styled.View`
  border: 1px solid black;
`;

export const HomeContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: #1b1d5b;
  align-items: center;
`;
