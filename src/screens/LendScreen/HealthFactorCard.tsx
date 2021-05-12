import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

interface HealthFactorCardProps {}

const StyledHealthFactorContainer = styled.View`
  /* border: 1px solid white; */
  width: 200px;
  height: 120px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.lightGreen};
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  /* flex: 1; */
`;

const StyledTitleText = styled.Text`
  color: ${(props) => props.theme.main};
  font-family: "Rubik_500Medium";
  margin-top: 10px;
  margin-left: 10px;
`;

const StyledTextHealthFactorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledHealthFactorText = styled.Text`
  color: ${(props) => props.theme.liquidGreen};
  font-family: "Rubik_500Medium";
  font-size: 52px;
`;

export const HealthFactorCard = (props: HealthFactorCardProps) => {
  return (
    <StyledHealthFactorContainer>
      <StyledTitleText>New Health Factor</StyledTitleText>
      <StyledTextHealthFactorContainer>
        <StyledHealthFactorText>12.4</StyledHealthFactorText>
      </StyledTextHealthFactorContainer>
    </StyledHealthFactorContainer>
  );
};
