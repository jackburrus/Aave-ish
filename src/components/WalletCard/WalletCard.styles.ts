import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const WalletCardContainer = styled.View`
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
export const WalletCardTitleContainer = styled.View`
  /* border-top-left-radius: 30px;
  border-top-right-radius: 30px; */
  display: flex;
  flex: 1;

  justify-content: flex-end;
  padding-bottom: 10px;
  padding-left: 25px;
`;
export const WalletCardTitleText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 16px;
  font-family: "Rubik_500Medium";
  margin-top: 10px;
`;

export const WalletBalanceContainer = styled.View`
  display: flex;
  flex: 1;
  padding-left: 25px;
  /* border: 1px solid purple; */
  margin-bottom: 20px;
`;

export const WalletBalanceText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 24px;
  font-family: "Rubik_500Medium";
`;
export const ApproximateText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 8px;
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
