import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ActionButton } from "../../components/ActionButton/ActionButton.component";
import { ActionButtonsContainer } from "../../components/ActionButton/ActionButtonsContainer.styles";
import { useDimensions } from "../../hooks/useDimensions";
interface HomeScreenProps {}

export const HomeScreen = (props: HomeScreenProps) => {
  const { screen } = useDimensions();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1B1D5B",
      }}
    >
      <ActionButtonsContainer>
        <ActionButton title={"Borrow"} />
        <ActionButton title={"Lend"} />
      </ActionButtonsContainer>
    </View>
  );
};
