import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface WalletScreenProps {}

export const WalletScreen = (props: WalletScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>WalletScreen</Text>
    </View>
  );
};
