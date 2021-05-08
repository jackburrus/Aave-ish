import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface DashBoardProps {}

export const DashBoard = (props: DashBoardProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>DashBoard</Text>
    </View>
  );
};
