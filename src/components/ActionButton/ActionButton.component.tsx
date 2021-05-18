import React from "react";
import { Dimensions, Pressable, TouchableOpacity } from "react-native";

import BorrowIcon from "../../assets/icons/BorrowIcon";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

const ActionButtonContainer = styled.Pressable<{ buttonColor: string }>`
  width: ${width / 2.7}px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 15px;
  align-items: center;
  margin: 10px;
  /* border: 1px solid black; */
  border-radius: 30px;
  background-color: ${({ buttonColor }) => buttonColor.toString()};
  flex-direction: row;
`;

const StyledButtonText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 18px;
  font-family: "Rubik_500Medium";
  /* margin-right: 10px; */
  /* font-family: "Rubik_400Regular"; */
`;

export const IconContainer = styled.View<{ shadowColor: string }>`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 2px ${({ shadowColor }) => shadowColor};
`;

export const ActionButtonsContainer = styled.View`
  width: ${width - 30}px;
  height: 110px;
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */
`;

interface ActionButtonProps {
  title: string;
  icon: React.ReactElement;
  // route: ProfileScreenRouteProp;
  // navigation: ProfileScreenNavigationProp;
}

export const ActionButton = (props: ActionButtonProps) => {
  const { title, icon } = props;
  const navigation = useNavigation();
  const {
    lightBlue,
    lightBlueHighlight,
    lightGreen,
    lightGreenHighlight,
  } = useTheme();
  return (
    <ActionButtonContainer
      onPress={() =>
        navigation.navigate(title === "Deposit" ? "Deposit" : "Borrow")
      }
      buttonColor={title === "Borrow" ? lightBlue : lightGreen}
    >
      <StyledButtonText>{title}</StyledButtonText>
      <IconContainer
        shadowColor={
          title === "Borrow" ? lightBlueHighlight : lightGreenHighlight
        }
      >
        {icon}
      </IconContainer>
    </ActionButtonContainer>
  );
};
