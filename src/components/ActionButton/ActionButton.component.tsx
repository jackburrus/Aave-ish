import React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import {
  ActionButtonContainer,
  StyledButtonText,
  IconContainer,
} from "./ActionButton.styles";
import BorrowIcon from "../../assets/icons/BorrowIcon";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

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
