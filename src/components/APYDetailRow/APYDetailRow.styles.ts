import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const APYDetailRowContainer = styled.View`
  width: ${width - 50}px;
  height: 100px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border: 1px solid white;
  margin-bottom: 20px;
  border-radius: 20px;
  flex-direction: row;
  /* margin-top: 10px; */
`;

export const StyledAPYTitleContainer = styled.View`
  /* width: ${width - 50}px; */
  border: 1px solid white;
  display: flex;
  flex: 1;
  /* height: 30px; */
`;

export const StyledPercentageContainer = styled.View`
  border: 1px solid white;
  display: flex;
  flex: 1;
  /* height: 50px;
  width: 50px; */
`;

export const StyledGraphContainer = styled.View`
  border: 1px solid white;
  display: flex;
  flex: 2;
  height: 100px;
`;

export const StyledAYPTextContainer = styled.View`
  display: flex;
  flex: 1;
`;

// export const StyledAllAYPTextContainer = styled.View``;
