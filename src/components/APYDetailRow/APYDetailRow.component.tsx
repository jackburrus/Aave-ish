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
} from "./APYDetailRow.styles";
interface APYDetailRowProps {
  title: string;
}

export const APYDetailRow = (props: APYDetailRowProps) => {
  const { title } = props;
  return (
    <APYDetailRowContainer>
      <StyledAYPTextContainer>
        <StyledAPYTitleContainer>
          <Text style={{ color: "white" }}>{title}</Text>
        </StyledAPYTitleContainer>
        <StyledPercentageContainer>
          <Text>Percentage</Text>
        </StyledPercentageContainer>
      </StyledAYPTextContainer>

      <StyledGraphContainer>
        <Text>Graph</Text>
      </StyledGraphContainer>
    </APYDetailRowContainer>
  );
};
