import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconContainer } from "../ActionButton/ActionButton.styles";
import {
  StyledDetailsContainer,
  StyledIconContainer,
  StyledMarketRowContainer,
  StyledMarketSizeContainer,
  StyledAPYContainer,
  StyledMarketSizeText,
  StyledMarketRowValue,
} from "./MarketRow.styles";
interface MarketRowProps {}

export const MarketRow = (props: MarketRowProps) => {
  return (
    <StyledMarketRowContainer>
      <StyledIconContainer>
        <IconContainer
          style={{ width: 70, height: 70 }}
          shadowColor={"rgba(108, 218, 176, 0.6)"}
        >
          <Text>Icon</Text>
        </IconContainer>
      </StyledIconContainer>
      <StyledDetailsContainer>
        <StyledMarketSizeContainer>
          <StyledMarketSizeText>Market Size</StyledMarketSizeText>
          <StyledMarketRowValue>892.67M</StyledMarketRowValue>
        </StyledMarketSizeContainer>
        <StyledAPYContainer>
          <StyledMarketSizeText>Deposit APY</StyledMarketSizeText>
          <StyledMarketRowValue>12.63%</StyledMarketRowValue>
        </StyledAPYContainer>
      </StyledDetailsContainer>
    </StyledMarketRowContainer>
  );
};
