import React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import {
  ActionButtonContainer,
  StyledButtonText,
  IconContainer,
} from "./ActionButton.styles";
import BorrowIcon from "../../assets/icons/BorrowIcon";
import { useNavigation } from "@react-navigation/native";

interface ActionButtonProps {
  title: string;
  icon: React.ReactElement;
  // route: ProfileScreenRouteProp;
  // navigation: ProfileScreenNavigationProp;
}

export const ActionButton = (props: ActionButtonProps) => {
  const { title, icon } = props;
  const navigation = useNavigation();
  return (
    <ActionButtonContainer
      onPress={() =>
        navigation.navigate(title === "Deposit" ? "Deposit" : "Borrow")
      }
      buttonColor={title === "Borrow" ? "#E2F2FD" : "#eafefd"}
    >
      <StyledButtonText>{title}</StyledButtonText>
      <IconContainer
        shadowColor={
          title === "Borrow"
            ? "rgba(161, 244, 255, 0.6)"
            : "rgba(108, 218, 176, 0.6)"
        }
      >
        {icon}
      </IconContainer>
    </ActionButtonContainer>
  );
};
