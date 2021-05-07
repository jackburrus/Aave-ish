import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface BorrowScreenProps {}

export const BorrowScreen = (props: BorrowScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>BorrowScreen</Text>
    </View>
  );
};
