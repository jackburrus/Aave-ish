import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const WalletCardContainer = styled.View`
  /* border: 1px solid red; */
  width: ${width - 50}px;
  height: 150px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.lightGreen};
`;
