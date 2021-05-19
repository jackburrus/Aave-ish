import React from "react";
import { Dimensions } from "react-native";
import styled, { useTheme } from "styled-components/native";

const { width } = Dimensions.get("window");
const StyledAPYCardContainer = styled.View`
  border: 1px solid white;
  display: flex;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  /* width: ${width / 3}px; */
  height: 120px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.lightBlue};
`;

const StyledTitleText = styled.Text`
  color: ${(props) => props.theme.main};
  font-family: "Rubik_500Medium";
  margin-top: 10px;
  margin-left: 20px;
  font-size: 16px;
`;

const StyledTextAPYContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledAPYText = styled.Text`
  color: ${(props) => props.theme.main};
  font-family: "Rubik_500Medium";
  font-size: 42px;
  opacity: 0.6;
`;
const StyledSubtitleText = styled.Text`
  color: ${(props) => props.theme.main};
  font-family: "Rubik_500Medium";
  font-size: 12px;
  opacity: 0.6;
  margin-left: 20px;
`;

interface APYCardProps {
  title: string;
  subtitle?: string;
  percentage: number;
}

export const APYCard = (props: APYCardProps) => {
  const { title, subtitle, percentage } = props;
  const { lightGreen, lightBlue } = useTheme();
  return (
    <StyledAPYCardContainer
      style={
        subtitle === "stable"
          ? { backgroundColor: lightGreen }
          : { backgroundColor: lightBlue }
      }
    >
      <StyledTitleText>{title}</StyledTitleText>
      {subtitle ? <StyledSubtitleText>({subtitle})</StyledSubtitleText> : null}

      <StyledTextAPYContainer>
        <StyledAPYText>{percentage}%</StyledAPYText>
      </StyledTextAPYContainer>
    </StyledAPYCardContainer>
  );
};
