import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const ActionButtonContainer = styled.View`
  width: ${width / 2.7}px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  margin: 10px;
  /* border: 1px solid black; */
  border-radius: 30px;
  background-color: #eafefd;
  flex-direction: row;
`;

export const StyledButtonText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 18px;
`;

export const IconContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 3px 2px 2px rgba(108, 218, 176, 0.6);
`;
