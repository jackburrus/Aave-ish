import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const ActionButtonsContainer = styled.View`
  width: ${width - 50}px;
  height: 110px;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;
