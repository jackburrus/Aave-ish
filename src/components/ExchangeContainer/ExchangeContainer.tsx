import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import styled from "styled-components/native";

interface ExchangeContainerProps {
  title: string;
}

const { width, height } = Dimensions.get("window");

const StyledExchangeContainer = styled.View`
  height: ${height / 0.2};
  width: ${width - 30};

  border-radius: 30px;
  background-color: #f8f0fe;
  box-shadow: 4px 5px 0.5px ${(props) => props.theme.lightPurple};
`;

export const ExchangeContainer = (props: ExchangeContainerProps) => {
  return (
    <StyledExchangeContainer>
      <Text>ExchangeContainer</Text>
    </StyledExchangeContainer>
  );
};
