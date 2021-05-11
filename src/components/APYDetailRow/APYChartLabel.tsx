import React from "react";
import { Text } from "react-native";
import { ChartYLabel, useChartData } from "@rainbow-me/animated-charts";
import styled from "styled-components";
// const Label = styled(ChartYLabel)`
//   font-size: 24px;

//   color: ${(props) => props.theme.main};
//   font-family: "Rubik_500Medium";
//   opacity: 0.8;
//   margin-top: 10px;
// `;

// const Label = styled(ChartYLabel)`
//   color: ${(props) => props.theme.main};
// `;

export const APYChartLabel = ({
  defaultValue,
  isNoPercentageData,
  percentageSharedValue,
}) => {
  // const { data } = useChartData();

  return <Text>15%</Text>;
  // return isNoPercentageData ? (
  //   <ChartYLabel>--%--</ChartYLabel>
  // ) : (
  //   <ChartYLabel>Percentage</ChartYLabel>
  // );
};
