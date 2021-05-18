import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { log } from "react-native-reanimated";
import { ChartContext } from "../../context/ChartContext";
import { WalletData } from "../../mockdata/Markets";
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

import Animated, {
  useSharedValue,
  Extrapolate,
  useAnimatedStyle,
  withDelay,
  withTiming,
  interpolate,
  Easing,
} from "react-native-reanimated";
interface WalletCardProps {
  title: string;
  balance: number;
  chart: React.ReactElement;
}

export const WalletCard = (props: WalletCardProps) => {
  const { title, balance, chart } = props;
  const { chartIndex, setChartIndex } = useContext(ChartContext);

  const opacityProgress = useSharedValue(0);
  useEffect(() => {
    opacityProgress.value = 0;
    opacityProgress.value = withTiming(1, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    });
    // console.log("ran index");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartIndex]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacityProgress.value,
  }));

  return (
    <WalletCardContainer>
      <TitleAndBalanceContainer>
        <WalletCardTitleContainer>
          <WalletCardTitleText>{title}</WalletCardTitleText>
        </WalletCardTitleContainer>
        <WalletBalanceContainer>
          <Animated.View style={animatedStyle}>
            <WalletBalanceText>
              ${WalletData[chartIndex - 1].balance}
            </WalletBalanceText>
          </Animated.View>
          <ApproximateText>Approximate balance</ApproximateText>
        </WalletBalanceContainer>
      </TitleAndBalanceContainer>
      <WalletChartContainer>{chart}</WalletChartContainer>
    </WalletCardContainer>
  );
};
