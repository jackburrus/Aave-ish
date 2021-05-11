import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {
  MarketDetailsContainer,
  MarketSummaryDetailsContainer,
  StyledAPYContainer,
} from "./MarketDetails.styles";
import MarketDetailsPieChart from "./MarketDetailsPieChart";
import { MarketDetailsText } from "./MarketDetailsText";
import { APYDetailRow } from "../../components/APYDetailRow/APYDetailRow.component";

const mockAPYData = [
  {
    index: 1,
    title: "Deposit APY",
    percentage: 3.4,
    bgColor: "#FAECE0",
  },
  {
    index: 2,
    title: "Borrow APY ",
    subtitle: "(stable)",
    percentage: 6.2,
    bgColor: "#CFCAF1",
  },
  {
    index: 3,
    title: "Borrow APY ",
    subtitle: "(variable)",
    percentage: 6.8,
    bgColor: "#CBD9F0",
  },
];

interface MarketDetailsProps {}

export const MarketDetails = ({ route, navigation }) => {
  // const { marketSize, depositAPY } = route.params.props;
  // const details = { marketSize: "1.3B", depositAPY: 3.4 };
  return (
    <MarketDetailsContainer>
      <MarketSummaryDetailsContainer>
        <MarketDetailsPieChart />
        <MarketDetailsText />
      </MarketSummaryDetailsContainer>
      <StyledAPYContainer>
        {mockAPYData.map((data, index) => {
          return (
            <APYDetailRow
              key={index}
              title={data.title}
              subtitle={data.subtitle}
              percentage={data.percentage}
              bgColor={data.bgColor}
            />
          );
        })}
      </StyledAPYContainer>
    </MarketDetailsContainer>
  );
};
