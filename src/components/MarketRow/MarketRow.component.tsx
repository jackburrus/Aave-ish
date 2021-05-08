import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StyledMarketRowContainer } from "./MarketRow.styles";
interface MarketRowProps {}

export const MarketRow = (props: MarketRowProps) => {
  return (
    <StyledMarketRowContainer>
      <Text>Coin Data</Text>
    </StyledMarketRowContainer>
  );
};
