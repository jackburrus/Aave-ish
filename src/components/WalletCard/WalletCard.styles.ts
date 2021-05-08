import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const WalletCardContainer = styled.View`
  flex-direction: row;
  width: ${width - 50}px;
  height: 150px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.lightGreen};
`;
export const WalletCardTitleContainer = styled.View`
  /* border-top-left-radius: 30px;
  border-top-right-radius: 30px; */
  display: flex;
  flex: 1;
  /* border: 1px solid black; */
  justify-content: center;
  padding-left: 25px;
`;
export const WalletCardTitleText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 14px;
  font-family: "Rubik_500Medium";
  margin-top: 10px;
`;

export const WalletBalanceContainer = styled.View`
  display: flex;
  flex: 1;
  padding-left: 25px;
  /* border: 1px solid purple; */
`;

export const WalletBalanceText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 20px;
  font-family: "Rubik_500Medium";
`;
export const ApproximateText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 6px;
  font-family: "Rubik_500Medium";
  opacity: 0.8;
  padding-left: 5px;
`;

export const WalletChartContainer = styled.View`
  width: ${width - 50}px;
  display: flex;
  flex: 1;
  /* border: 1px solid black; */
  justify-content: center;
  align-items: center;
`;

export const TitleAndBalanceContainer = styled.View`
  /* border: 1px solid red; */
  display: flex;
  flex: 1.3;
  flex-direction: column;
`;
