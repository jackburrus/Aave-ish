import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  MarketDetailsContainer,
  MarketSummaryDetailsContainer,
  StyledAPYContainer,
} from "./MarketDetails.styles";

interface MarketDetailsProps {}

export const MarketDetails = ({ route, navigation }) => {
  // const { marketSize, depositAPY } = route.params.props;
  const details = { marketSize: "1.3B", depositAPY: 3.4 };
  return (
    <MarketDetailsContainer>
      <MarketSummaryDetailsContainer>
        <Text>Market Details</Text>
      </MarketSummaryDetailsContainer>
      <StyledAPYContainer>
        <Text>APY Container</Text>
      </StyledAPYContainer>
    </MarketDetailsContainer>
  );
};
