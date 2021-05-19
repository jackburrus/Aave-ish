import React from "react";
import { Dimensions } from "react-native";
import { APYDetailRow } from "../../components/APYDetailRow/APYDetailRow";
import { HeaderContainer, HeaderText } from "../HomeScreen/Home.styles";
import {
  MarketDetailsContainer,
  MarketSummaryDetailsContainer,
  StyledAPYContainer,
} from "./MarketDetails.styles";
import MarketDetailsPieChart from "./MarketDetailsPieChart";
import { MarketDetailsText } from "./MarketDetailsText";

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
  const { marketSize, depositAPY, icon, asset } = route.params.props;

  return (
    <MarketDetailsContainer>
      <MarketSummaryDetailsContainer>
        {/* <Image
          source={icon}
          style={{
            width: 30,
            height: 30,
            position: "absolute",
            left: 20,
            top: 20,
          }}
        /> */}
        <MarketDetailsPieChart />
        <MarketDetailsText />
      </MarketSummaryDetailsContainer>

      <StyledAPYContainer>
        <HeaderContainer style={{ paddingBottom: 10 }}>
          <HeaderText>APY Details</HeaderText>
        </HeaderContainer>
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
      {/* <View
        style={{
          
          borderRadius: 20,
          position: "absolute",
          bottom: 35,
          width: device.window.width - 50,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          
          
          
          height: 90,
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
      </View> */}
    </MarketDetailsContainer>
  );
};
