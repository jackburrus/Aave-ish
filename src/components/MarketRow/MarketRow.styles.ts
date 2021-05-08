import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const StyledMarketRowContainer = styled.Pressable`
  width: ${width - 50}px;
  /* border: 1px solid black; */
  height: 100px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.lightGreen};
  margin-top: 20px;
  flex-direction: row;
`;

export const StyledMarketsContainer = styled.View`
  width: ${width}px;
  display: flex;
  flex: 1;
`;

export const StyledIconContainer = styled.View`
  /* border: 1px solid black; */
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledDetailsContainer = styled.View`
  /* border: 1px solid black; */
  display: flex;
  flex: 2;
  flex-direction: row;
  margin-right: 10px;
`;
export const StyledMarketSizeContainer = styled.View`
  /* border: 1px solid black; */
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const StyledAPYContainer = styled.View`
  /* border: 1px solid black; */
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledMarketSizeText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 16px;
  font-family: "Rubik_500Medium";
  padding-bottom: 5px;
`;

export const StyledMarketRowValue = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 14px;
  font-family: "Rubik_500Medium";
  opacity: 0.6;
`;
