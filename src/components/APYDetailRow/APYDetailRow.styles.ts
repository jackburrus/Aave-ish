import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const APYDetailRowContainer = styled.Pressable`
  width: ${width - 50}px;
  height: 100px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* border: 1px solid white; */
  margin-bottom: 20px;
  border-radius: 20px;
  flex-direction: row;
  /* margin-top: 10px; */
`;

export const StyledAPYTitleContainer = styled.View`
  /* width: ${width - 50}px; */
  /* border: 1px solid white; */
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  /* height: 30px; */
`;

export const StyledAPYTitleText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.main};
  font-family: "Rubik_500Medium";
  text-align: center;
  margin-left: 10px;
  margin-top: 10px;
  /* border: 1px solid; */
`;

export const StyledAPYTitleSubtext = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.main};
  font-family: "Rubik_500Medium";
  opacity: 0.6;
`;

export const StyledPercentageContainer = styled.View`
  /* border: 1px solid white; */
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  /* height: 50px;
  width: 50px; */
`;

export const StyledPercentageText = styled.Text`
  font-size: 24px;

  color: ${(props) => props.theme.main};
  font-family: "Rubik_500Medium";
  opacity: 0.8;
  margin-top: 10px;
`;

export const StyledGraphContainer = styled.View`
  /* border: 1px solid white; */
  display: flex;
  flex: 2;
  height: 100px;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;

export const StyledAYPTextContainer = styled.View`
  display: flex;
  flex: 1.5;
`;

// export const StyledAllAYPTextContainer = styled.View``;
