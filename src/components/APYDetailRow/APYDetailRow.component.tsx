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
  StyledAPYTitleSubtext,
} from "./APYDetailRow.styles";

import { APYChartLabel } from "./APYChartLabel";

import APYChart from "./APYChart";
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
        <StyledPercentageContainer>
          <APYChartLabel>{percentage}</APYChartLabel>
        </StyledPercentageContainer>
      </StyledAYPTextContainer>

      <StyledGraphContainer>
        <APYChart type={title} subtitle={subtitle} />
      </StyledGraphContainer>
    </APYDetailRowContainer>
  );
};
