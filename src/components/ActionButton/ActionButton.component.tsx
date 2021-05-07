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
    <ActionButtonContainer>
      <StyledButtonText>{title}</StyledButtonText>
      <IconContainer />
    </ActionButtonContainer>
  );
};
