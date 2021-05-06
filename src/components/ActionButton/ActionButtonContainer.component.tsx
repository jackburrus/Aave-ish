import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ActionButtonContainerProps {}

export const ActionButtonContainer = (props: ActionButtonContainerProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ActionButtonContainer</Text>
    </View>
  );
};
