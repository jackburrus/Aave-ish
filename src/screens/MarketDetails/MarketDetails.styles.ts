import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const MarketDetailsContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.main};
  align-items: center;
`;

export const MarketSummaryDetailsContainer = styled.View`
  width: ${width - 50}px;
  /* border: 1px solid white; */
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.lightBlue};
  border-radius: 20px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

export const StyledAPYContainer = styled.View`
  width: ${width}px;
  /* border: 1px solid white; */
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;
