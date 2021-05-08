import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {
  WalletBalanceContainer,
  WalletCardContainer,
  WalletCardTitleContainer,
  TitleAndBalanceContainer,
  WalletChartContainer,
} from "./WalletCard.styles";
interface WalletCardProps {}

export const WalletCard = (props: WalletCardProps) => {
  return (
    <WalletCardContainer>
      <TitleAndBalanceContainer>
        <WalletCardTitleContainer>
          <Text>Title</Text>
        </WalletCardTitleContainer>
        <WalletBalanceContainer>
          <Text>Balance</Text>
        </WalletBalanceContainer>
      </TitleAndBalanceContainer>
      <WalletChartContainer>
        <Text>Chart</Text>
      </WalletChartContainer>
    </WalletCardContainer>
  );
};
