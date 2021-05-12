import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
interface APYCardProps {}

const StyledAPYCardContainer = styled.View`
  border: 1px solid white;
  width: 150px;
  height: 120px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.lightBlue};
`;

const StyledTitleText = styled.Text`
  color: ${(props) => props.theme.main};
  font-family: "Rubik_500Medium";
  margin-top: 10px;
  margin-left: 10px;
`;

const StyledTextAPYContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledAPYText = styled.Text`
  color: ${(props) => props.theme.main};
  font-family: "Rubik_500Medium";
  font-size: 42px;
  opacity: 0.6;
`;

export const APYCard = (props: APYCardProps) => {
  return (
    <StyledAPYCardContainer>
      <StyledTitleText>APY</StyledTitleText>
      <StyledTextAPYContainer>
        <StyledAPYText>3.4%</StyledAPYText>
      </StyledTextAPYContainer>
    </StyledAPYCardContainer>
  );
};
