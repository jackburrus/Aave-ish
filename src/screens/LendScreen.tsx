import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ExchangeContainer } from "../components/ExchangeContainer/ExchangeContainer";
import styled from "styled-components/native";

interface LendScreenProps {}

const LendScreenContainer = styled.View`
  background-color: ${(props) => props.theme.main};
  display: flex;
  flex: 1;
  align-items: center;
  padding-top: 50px;
`;

export const LendScreen = (props: LendScreenProps) => {
  return (
    <LendScreenContainer>
      <ExchangeContainer />
    </LendScreenContainer>
  );
};
