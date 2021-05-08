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
  border: 1px solid black;
`;

export const WalletBalanceContainer = styled.View`
  display: flex;
  flex: 1;
  border: 1px solid purple;
`;
export const WalletChartContainer = styled.View`
  width: ${width - 50}px;
  display: flex;
  flex: 1;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`;

export const TitleAndBalanceContainer = styled.View`
  border: 1px solid red;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
