import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { log } from "react-native-reanimated";
import { ChartContext } from "../../context/ChartContext";
import { WalletData } from "../../mockdata/Markets";

import Animated, {
  useSharedValue,
  Extrapolate,
  useAnimatedStyle,
  withDelay,
  withTiming,
  interpolate,
  Easing,
} from "react-native-reanimated";
import styled from "styled-components/native";
interface WalletCardProps {
  title: string;
  balance: number;
  chart: React.ReactElement;
}
const { width, height } = Dimensions.get("window");

const WalletCardContainer = styled.View`
  flex-direction: row;
  width: ${width - 50}px;
  height: 150px;
  border-radius: 30px;
  background-color: #f8f0fe;
  box-shadow: 3px 4px 0.5px ${(props) => props.theme.lightPurple};
  /* border: 1px solid black; */
  /* box-shadow: 0px 5px 0.5px ${(props) => props.theme.otherPurple}; */
  /* box-shadow: 0px 5px 0px ${(props) => props.theme.lightPurple}; */
`;
const WalletCardTitleContainer = styled.View`
  /* border-top-left-radius: 30px;
  border-top-right-radius: 30px; */
  display: flex;
  flex: 1;

  justify-content: flex-end;
  padding-bottom: 10px;
  padding-left: 25px;
`;
const WalletCardTitleText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 16px;
  font-family: "Rubik_500Medium";
  margin-top: 10px;
`;

const WalletBalanceContainer = styled.View`
  display: flex;
  flex: 1;
  padding-left: 25px;
  /* border: 1px solid purple; */
  margin-bottom: 20px;
`;

const WalletBalanceText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 24px;
  font-family: "Rubik_500Medium";
`;
const ApproximateText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 8px;
  font-family: "Rubik_500Medium";
  opacity: 0.8;
  padding-left: 5px;
`;

const WalletChartContainer = styled.View`
  width: ${width - 50}px;
  display: flex;
  flex: 1;
  /* border: 1px solid black; */
  justify-content: center;
  align-items: center;
`;

const TitleAndBalanceContainer = styled.Pressable`
  /* border: 1px solid red; */
  display: flex;
  flex: 1.3;
  flex-direction: column;
`;

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
      <TitleAndBalanceContainer onPress={() => setChartIndex(null)}>
        <WalletCardTitleContainer>
          <WalletCardTitleText>{title}</WalletCardTitleText>
        </WalletCardTitleContainer>
        <WalletBalanceContainer>
          <Animated.View style={animatedStyle}>
            <WalletBalanceText>
              ${chartIndex ? WalletData[chartIndex - 1].balance : 1001.23}
            </WalletBalanceText>
          </Animated.View>
          <ApproximateText>Approximate balance</ApproximateText>
        </WalletBalanceContainer>
      </TitleAndBalanceContainer>
      <WalletChartContainer>{chart}</WalletChartContainer>
    </WalletCardContainer>
  );
};
