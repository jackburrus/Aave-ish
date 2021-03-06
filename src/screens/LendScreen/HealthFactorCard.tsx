import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

interface HealthFactorCardProps {}

const StyledHealthFactorContainer = styled.View`
  display: flex;
  flex: 1.3;
  height: 120px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.lightGreen};
`;

const StyledTitleText = styled.Text`
  color: ${(props) => props.theme.main};
  font-family: "Rubik_500Medium";
  margin-top: 10px;
  margin-left: 20px;
  font-size: 16px;
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
