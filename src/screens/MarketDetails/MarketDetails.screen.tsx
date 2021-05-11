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
import { device } from "../../constants/index";
import { ExtraDetails } from "./ExtraDetails";

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

const ExtraDetailsData = [
  {
    title: "Maximum LTV",
    percentage: true,
    percentageAmount: "75%",
    detail: null,
  },
  {
    title: "Liquidation Threshold",
    percentage: true,
    percentageAmount: "80%",
    detail: null,
  },
  {
    title: "Liquidation Penalty",
    percentage: true,
    percentageAmount: "5%",
    detail: null,
  },
  {
    title: "Used as Collateral",
    percentage: false,
    detail: null,
  },
  {
    title: "Stable Borrowing",
    percentage: false,
    detail: null,
  },
];

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
      <View
        style={{
          borderWidth: 1,
          position: "absolute",
          bottom: 35,
          width: device.window.width - 50,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          // alignItems: "space-around",
          // marginLeft: 50,
          // marginRight: 50,
          height: 100,
        }}
      >
        {ExtraDetailsData.map((data, index) => {
          return (
            <ExtraDetails
              key={index.toString()}
              percentage={data.percentage}
              title={data.title}
              percentageAmount={data.percentageAmount}
            />
          );
        })}
      </View>
    </MarketDetailsContainer>
  );
};
