import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ActionButton } from "../../components/ActionButton/ActionButton.component";
import { ActionButtonsContainer } from "../../components/ActionButton/ActionButton.styles";
import BorrowIcon from "../../assets/icons/BorrowIcon";
import LendIcon from "../../assets/icons/LendIcon";
import AaveIcon from "../../assets/icons/AaveIcon";

import PieChartExample from "../../components/WalletCard/PieChart.component";
import {
  HomeContainer,
  WalletContainer,
  NewActionContainer,
  AssetsContainer,
} from "./Home.styles";
import { WalletCard } from "../../components/WalletCard/WalletCard.component";
interface HomeScreenProps {}

export const HomeScreen = (props: HomeScreenProps, { navigation }) => {
  return (
    <HomeContainer>
      <WalletContainer>
        <WalletCard
          title={"Deposit Information"}
          balance={182.307}
          chart={<PieChartExample />}
        />
      </WalletContainer>

      <ActionButtonsContainer>
        <ActionButton title={"Lend"} icon={<LendIcon />} />
        <ActionButton title={"Borrow"} icon={<BorrowIcon />} />
      </ActionButtonsContainer>
      <AssetsContainer />
    </HomeContainer>
  );
};
