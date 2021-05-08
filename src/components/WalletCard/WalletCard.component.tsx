import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {
  WalletBalanceContainer,
  WalletCardContainer,
  WalletCardTitleContainer,
  TitleAndBalanceContainer,
  WalletChartContainer,
  WalletCardTitleText,
  WalletBalanceText,
  ApproximateText,
} from "./WalletCard.styles";
interface WalletCardProps {
  title: string;
  balance: number;
  chart: React.ReactElement;
}

export const WalletCard = (props: WalletCardProps) => {
  const { title, balance, chart } = props;
  return (
    <WalletCardContainer>
      <TitleAndBalanceContainer>
        <WalletCardTitleContainer>
          <WalletCardTitleText>{title}</WalletCardTitleText>
        </WalletCardTitleContainer>
        <WalletBalanceContainer>
          <WalletBalanceText>${balance}</WalletBalanceText>
          <ApproximateText>Approximate balance</ApproximateText>
        </WalletBalanceContainer>
      </TitleAndBalanceContainer>
      <WalletChartContainer>{chart}</WalletChartContainer>
    </WalletCardContainer>
  );
};
