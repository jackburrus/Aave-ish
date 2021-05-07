import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  ActionButtonContainer,
  StyledButtonText,
  IconContainer,
} from "./ActionButton.styles";
import BorrowIcon from "../../assets/icons/BorrowIcon";
interface ActionButtonProps {
  title: string;
  icon: React.ReactElement;
}

export const ActionButton = (props: ActionButtonProps) => {
  const { title, icon } = props;
  return (
    <ActionButtonContainer
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
