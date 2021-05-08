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
interface MarketRowProps {
  marketSize: string;
  depositAPY: number;
}

export const MarketRow = (props: MarketRowProps) => {
  const { marketSize, depositAPY } = props;
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
          <StyledMarketRowValue>{marketSize}</StyledMarketRowValue>
        </StyledMarketSizeContainer>
        <StyledAPYContainer>
          <StyledMarketSizeText>Deposit APY</StyledMarketSizeText>
          <StyledMarketRowValue>{depositAPY}%</StyledMarketRowValue>
        </StyledAPYContainer>
      </StyledDetailsContainer>
    </StyledMarketRowContainer>
  );
};
