import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const StyledMarketRowContainer = styled.View`
  width: ${width - 50}px;
  /* border: 1px solid black; */
  height: 100px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.lightGreen};
  margin-top: 20px;
`;

export const StyledMarketsContainer = styled.View`
  width: ${width}px;
  display: flex;
  flex: 1;
  border: 3px solid green;
`;
