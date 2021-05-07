import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  ActionButtonContainer,
  StyledButtonText,
  IconContainer,
} from "./ActionButton.styles";
interface ActionButtonProps {
  title: string;
}

export const ActionButton = (props: ActionButtonProps) => {
  const { title } = props;
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
      />
    </ActionButtonContainer>
  );
};
