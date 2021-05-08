import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MarketDetailsContainer } from "./MarketDetails.styles";
interface MarketDetailsProps {}

export const MarketDetails = ({ route, navigation }) => {
  const { marketSize, depositAPY } = route.params.props;
  return (
    <MarketDetailsContainer>
      <Text style={{ color: "white" }}>{marketSize}</Text>
      <Text style={{ color: "white" }}>{depositAPY}%</Text>
    </MarketDetailsContainer>
  );
};
