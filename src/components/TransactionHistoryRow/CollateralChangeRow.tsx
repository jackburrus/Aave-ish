import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
interface CollateralChangeRowProps {}
const { width, height } = Dimensions.get("window");
const StyledCollateralRowContainer = styled.View`
  width: ${width - 50}px;
  /* border: 1px solid white; */
  height: 75px;
`;

export const CollateralChangeRow = (props: CollateralChangeRowProps) => {
  return (
    <StyledCollateralRowContainer>
      <Text style={{ color: "white" }}>CollateralChangeRow</Text>
    </StyledCollateralRowContainer>
  );
};
