import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ActionButton } from "../../components/ActionButton/ActionButton.component";
import { ActionButtonsContainer } from "../../components/ActionButton/ActionButton.component";
import BorrowIcon from "../../assets/icons/BorrowIcon";
import LendIcon from "../../assets/icons/LendIcon";
import AaveIcon from "../../assets/icons/AaveIcon";

import PieChartExample from "../../components/WalletCard/PieChart.component";
import {
  HomeContainer,
  WalletContainer,
  NewActionContainer,
  AssetsContainer,
  HeaderContainer,
  HeaderText,
} from "./Home.styles";
import { WalletCard } from "../../components/WalletCard/WalletCard.component";
import { MarketRow } from "../../components/MarketRow/MarketRow.component";
import { StyledMarketsContainer } from "../../components/MarketRow/MarketRow.styles";
import { MarketsData } from "../../mockdata/Markets";
import { ChartContextProvider } from "../../context/ChartContext";
import { PieChartIcon } from "../../components/WalletCard/PieChartIcon.Component";
const { width, height } = Dimensions.get("window");
interface HomeScreenProps {}

export const HomeScreen = (props: HomeScreenProps) => {
  return (
    <HomeContainer>
      <WalletContainer>
        <ChartContextProvider>
          <WalletCard
            title={"Deposit Information"}
            balance={909.08}
            chart={<PieChartExample />}
          />
          <PieChartIcon />
        </ChartContextProvider>
      </WalletContainer>
      <HeaderContainer>
        <HeaderText>New Action</HeaderText>
      </HeaderContainer>
      <ActionButtonsContainer>
        <ActionButton title={"Deposit"} icon={<LendIcon />} />
        <ActionButton title={"Borrow"} icon={<BorrowIcon />} />
      </ActionButtonsContainer>
      <HeaderContainer>
        <HeaderText>Markets</HeaderText>
      </HeaderContainer>
      <AssetsContainer contentContainerStyle={{ alignItems: "center" }}>
        {MarketsData.map((market, index) => {
          return (
            <MarketRow
              key={index.toString()}
              marketSize={market.marketSize}
              depositAPY={market.depositAPY}
              bgColor={market.cardColor}
              icon={market.icon}
              asset={market.asset}
              iconContainerHighlight={market.iconContainerHighlight}
            />
          );
        })}
      </AssetsContainer>
      {/* <StyledMarketsContainer>
        
      </StyledMarketsContainer> */}
    </HomeContainer>
  );
};
