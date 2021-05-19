import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import APYChart from "./APYChart";

const { width, height } = Dimensions.get("window");

const APYDetailRowContainer = styled.Pressable`
  width: ${width - 50}px;
  height: 100px;
  display: flex;

  align-items: center;

  margin-bottom: 20px;
  border-radius: 20px;
  flex-direction: row;
`;

const StyledAPYTitleContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledAPYTitleText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.main};
  font-family: "Rubik_500Medium";
  text-align: center;
  margin-left: 10px;
  margin-top: 10px;
`;

const StyledAPYTitleSubtext = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.main};
  font-family: "Rubik_500Medium";
  opacity: 0.6;
`;

const StyledGraphContainer = styled.View`
  display: flex;
  flex: 2;
  height: 100px;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;

const StyledAYPTextContainer = styled.View`
  display: flex;
  flex: 1.5;
`;

interface APYDetailRowProps {
  title: string;
  subtitle: string | undefined;
  percentage: number;
  bgColor: string;
}

export const APYDetailRow = (props: APYDetailRowProps) => {
  const { title, percentage, bgColor, subtitle } = props;
  return (
    <APYDetailRowContainer style={{ backgroundColor: bgColor }}>
      <StyledAYPTextContainer>
        <StyledAPYTitleContainer>
          <StyledAPYTitleText
            style={title === "Deposit APY" ? { marginTop: 20 } : null}
          >
            {title}
          </StyledAPYTitleText>
          <StyledAPYTitleSubtext>
            {subtitle ? subtitle : null}
          </StyledAPYTitleSubtext>
        </StyledAPYTitleContainer>
      </StyledAYPTextContainer>

      <StyledGraphContainer>
        <APYChart
          type={title}
          subtitle={subtitle}
          defaultValue={percentage.toString()}
        />
      </StyledGraphContainer>
    </APYDetailRowContainer>
  );
};
