import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
import { ExchangeContainer } from "../../components/ExchangeContainer/ExchangeContainer";
import { APYCard } from "../LendScreen/APYCard";
interface BorrowScreenProps {}

const { width, height } = Dimensions.get("window");

const BorrowScreenContainer = styled.View`
  background-color: ${(props) => props.theme.main};
  display: flex;

  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
`;
const CardContainer = styled.View`
  display: flex;
  flex: 1;
  padding-top: 30px;
  padding-left: 5px;
  padding-right: 5px;
  /* border: 1px solid white; */
  width: ${width - 30}px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const BorrowScreen = (props: BorrowScreenProps) => {
  return (
    <BorrowScreenContainer>
      <ExchangeContainer />
      <CardContainer>
        <APYCard title="APY" subtitle="stable" />
        <APYCard title="APY" subtitle="variable" />
      </CardContainer>
    </BorrowScreenContainer>
  );
};
