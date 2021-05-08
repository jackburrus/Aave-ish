import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const WalletContainer = styled.View`
  /* border: 2px solid black; */

  flex: 1;
  width: ${width}px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const NewActionContainer = styled.View`
  flex-direction: row;
  /* flex: 1; */
`;

export const HomeContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: #1b1d5b;
  align-items: center;
`;

export const AssetsContainer = styled.ScrollView`
  /* border: 2px solid black; */

  flex: 2;
  width: ${width}px;

  /* align-items: center; */
`;

export const HeaderContainer = styled.View`
  width: ${width - 50}px;
  margin-top: 10px;
  margin-bottom: 10px;
  /* border: 1px solid red; */
`;

export const HeaderText = styled.Text`
  color: white;
  font-size: 22px;
  font-family: "Rubik_500Medium";
  /* margin-left: 10px; */
`;
