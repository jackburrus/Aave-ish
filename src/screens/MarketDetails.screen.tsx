import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MarketDetailsProps {}

export const MarketDetails = ({ route, navigation }) => {
  const { marketSize } = route.params.props;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{marketSize}</Text>
    </View>
  );
};
