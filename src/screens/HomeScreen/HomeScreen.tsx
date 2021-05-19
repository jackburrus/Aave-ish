import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import BorrowIcon from "../../assets/icons/BorrowIcon";
import LendIcon from "../../assets/icons/LendIcon";
import {
  ActionButton,
  ActionButtonsContainer,
} from "../../components/ActionButton/ActionButton";
import { MarketRow } from "../../components/MarketRow/MarketRow";
import PieChartExample from "../../components/WalletCard/PieChart";
import { PieChartIcon } from "../../components/WalletCard/PieChartIcon";
import { WalletCard } from "../../components/WalletCard/WalletCard";
import { ChartContextProvider } from "../../context/ChartContext";
import { MarketsData } from "../../mockdata/Markets";

const { width } = Dimensions.get("window");

const WalletContainer = styled.View`
  flex: 1;
  width: ${width}px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const HomeContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: #1b1d5b;
  align-items: center;
`;

const AssetsContainer = styled.ScrollView`
  flex: 2;
  width: ${width}px;
`;

const HeaderContainer = styled.View`
  width: ${width - 50}px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const HeaderText = styled.Text`
  color: white;
  font-size: 22px;
  font-family: "Rubik_500Medium";
`;

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
    </HomeContainer>
  );
};
