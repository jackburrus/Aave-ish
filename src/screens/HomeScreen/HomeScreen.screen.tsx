import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ActionButton } from "../../components/ActionButton/ActionButton.component";
import { ActionButtonsContainer } from "../../components/ActionButton/ActionButton.styles";
import BorrowIcon from "../../assets/icons/BorrowIcon";
import LendIcon from "../../assets/icons/LendIcon";
import AaveIcon from "../../assets/icons/AaveIcon";
import { HomeContainer, WalletContainer } from "./Home.styles";
interface HomeScreenProps {}

export const HomeScreen = (props: HomeScreenProps, { navigation }) => {
  return (
    <HomeContainer>
      <WalletContainer />

      <ActionButtonsContainer>
        <ActionButton title={"Lend"} icon={<LendIcon />} />
        <ActionButton title={"Borrow"} icon={<BorrowIcon />} />
      </ActionButtonsContainer>
    </HomeContainer>
  );
};
