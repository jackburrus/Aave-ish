import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
interface MarketDetailsTextProps {}
const { width, height } = Dimensions.get("window");

const TextContainer = styled.View`
  /* border: 1px solid black; */
  display: flex;
  flex: 1;
  width: ${width - 50}px;
  flex-direction: row;
`;

const MarketInfoContainer = styled.View`
  /* border: 1px solid black; */
  display: flex;
  flex: 1;
  align-items: center;
`;
const TitleText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 16px;
  font-family: "Rubik_500Medium";
`;

export const StyledLiquidValue = styled.Text`
  color: ${(props) => props.theme.liquidGreen};
  font-size: 14px;
  font-family: "Rubik_500Medium";
  /* opacity: 0.6; */
`;
export const StyledBorrowedValue = styled.Text`
  color: ${(props) => props.theme.borrowedRed};
  font-size: 14px;
  font-family: "Rubik_500Medium";
  /* opacity: 0.6; */
`;

export const MarketDetailsText = (props: MarketDetailsTextProps) => {
  return (
    <TextContainer>
      <MarketInfoContainer>
        <TitleText>Total Borrowed</TitleText>
        <StyledBorrowedValue>$624,687,174</StyledBorrowedValue>
      </MarketInfoContainer>
      <MarketInfoContainer>
        <TitleText>Available Liquidity</TitleText>
        <StyledLiquidValue>$138,412,210</StyledLiquidValue>
      </MarketInfoContainer>
    </TextContainer>
  );
};
