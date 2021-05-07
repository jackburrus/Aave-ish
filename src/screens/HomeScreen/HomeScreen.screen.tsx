import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ActionButton } from "../../components/ActionButton/ActionButton.component";
import { ActionButtonsContainer } from "../../components/ActionButton/ActionButton.styles";
import BorrowIcon from "../../assets/icons/BorrowIcon";
import LendIcon from "../../assets/icons/LendIcon";

interface HomeScreenProps {}

export const HomeScreen = (props: HomeScreenProps) => {
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
        <ActionButton title={"Borrow"} icon={<BorrowIcon />} />
        <ActionButton title={"Lend"} icon={<LendIcon />} />
      </ActionButtonsContainer>
    </View>
  );
};
