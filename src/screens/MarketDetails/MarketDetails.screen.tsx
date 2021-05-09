import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  MarketDetailsContainer,
  MarketSummaryDetailsContainer,
  StyledAPYContainer,
} from "./MarketDetails.styles";

import { APYDetailRow } from "../../components/APYDetailRow/APYDetailRow.component";

const mockAPYData = [
  {
    index: 1,
  },
  {
    index: 2,
  },
  {
    index: 3,
  },
];

interface MarketDetailsProps {}

export const MarketDetails = ({ route, navigation }) => {
  // const { marketSize, depositAPY } = route.params.props;
  const details = { marketSize: "1.3B", depositAPY: 3.4 };
  return (
    <MarketDetailsContainer>
      <MarketSummaryDetailsContainer>
        <Text style={{ color: "white" }}>Market Details</Text>
      </MarketSummaryDetailsContainer>
      <StyledAPYContainer
        contentContainerStyle={{
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {mockAPYData.map((data) => {
          return <APYDetailRow title={data.index} />;
        })}
      </StyledAPYContainer>
    </MarketDetailsContainer>
  );
};
