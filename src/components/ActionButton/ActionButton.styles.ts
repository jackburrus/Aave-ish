import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const ActionButtonContainer = styled.View`
  width: ${width / 3}px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 1px solid black;
  border-radius: 30px;
  background-color: #eafefd;
`;

export const StyledButtonText = styled.Text`
  color: black;
`;
