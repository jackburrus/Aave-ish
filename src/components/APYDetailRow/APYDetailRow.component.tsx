import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StyledAPYContainer } from "../MarketRow/MarketRow.styles";

import {
  StyledGraphContainer,
  StyledPercentageContainer,
} from "./APYDetailRow.styles";
import {
  APYDetailRowContainer,
  StyledAPYTitleContainer,
  StyledAYPTextContainer,
  StyledAPYTitleText,
  StyledPercentageText,
} from "./APYDetailRow.styles";
interface APYDetailRowProps {
  title: string;
  percentage: number;
}

export const APYDetailRow = (props: APYDetailRowProps) => {
  const { title, percentage } = props;
  return (
    <APYDetailRowContainer>
      <StyledAYPTextContainer>
        <StyledAPYTitleContainer>
          <StyledAPYTitleText>{title}</StyledAPYTitleText>
        </StyledAPYTitleContainer>
        <StyledPercentageContainer>
          <StyledPercentageText>{percentage}</StyledPercentageText>
        </StyledPercentageContainer>
      </StyledAYPTextContainer>

      <StyledGraphContainer>
        <Text style={{ color: "white" }}>Graph</Text>
      </StyledGraphContainer>
    </APYDetailRowContainer>
  );
};
