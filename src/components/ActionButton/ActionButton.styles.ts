import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const ActionButtonContainer = styled.Pressable<{ buttonColor: string }>`
  width: ${width / 2.7}px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 15px;
  align-items: center;
  margin: 10px;
  /* border: 1px solid black; */
  border-radius: 30px;
  background-color: ${({ buttonColor }) => buttonColor.toString()};
  flex-direction: row;
`;

export const StyledButtonText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 18px;
  font-family: "Rubik_500Medium";
  /* font-family: "Rubik_400Regular"; */
`;

export const IconContainer = styled.View<{ shadowColor: string }>`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 2px 2px ${({ shadowColor }) => shadowColor};
`;

export const ActionButtonsContainer = styled.View`
  width: ${width - 30}px;
  height: 110px;
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */
`;
