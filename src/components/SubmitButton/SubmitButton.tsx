import React from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import styled from "styled-components/native";
interface SubmitButtonProps {}
const { width, height } = Dimensions.get("window");
const StyledButtonContainer = styled.Pressable`
  width: ${width / 2}px;
  height: 100px;
`;

export const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <StyledButtonContainer>
      <Text style={{ color: "white", borderWidth: 1, borderColor: "red" }}>
        Submit
      </Text>
    </StyledButtonContainer>
  );
};
