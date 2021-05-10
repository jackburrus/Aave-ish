import React from "react";
import { View, Text, StyleSheet } from "react-native";
import APYChart from "../../components/APYDetailRow/APYChart";
interface WalletScreenProps {}

export const WalletScreen = (props: WalletScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <APYChart />
    </View>
  );
};
