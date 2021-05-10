import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconContainer } from "../ActionButton/ActionButton.styles";
import {
  StyledDetailsContainer,
  StyledIconContainer,
  StyledMarketRowContainer,
  StyledMarketSizeContainer,
  StyledAPYContainer,
  StyledAPYContainerCustom,
  StyledMarketSizeText,
  StyledMarketRowValue,
} from "./MarketRow.styles";
interface MarketRowProps {
  marketSize: string;
  depositAPY: number;
  bgColor: string;
}

export const MarketRow = (props: MarketRowProps) => {
  const { marketSize, depositAPY, bgColor } = props;
  const navigation = useNavigation();
  return (
    <StyledMarketRowContainer
      style={{ backgroundColor: bgColor }}
      onPress={() => navigation.navigate("MarketDetails", { props })}
    >
      <StyledIconContainer>
        <IconContainer
          style={{ width: 70, height: 70 }}
          shadowColor={"rgba(88, 90, 88, 0.6)"}
        >
          <Text>Icon</Text>
        </IconContainer>
      </StyledIconContainer>
      <StyledDetailsContainer>
        {/* <StyledAPYContainerCustom /> */}
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
