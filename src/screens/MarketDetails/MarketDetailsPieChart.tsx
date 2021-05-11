import React from "react";
import { PieChart } from "react-native-svg-charts";
import { useTheme } from "styled-components";

const MarketDetailsPieChart = () => {
  const { borrowedRed, liquidGreen } = useTheme();
  const data = [
    {
      key: 1,
      value: 80,
      svg: { fill: borrowedRed },
      arc: { cornerRadius: 10 },
    },
    {
      key: 2,
      value: 20,
      svg: { fill: liquidGreen },
      arc: { cornerRadius: 10 },
    },
  ];

  return (
    <PieChart
      style={{
        height: 200,
        width: 200,
        // borderWidth: 1,
        flex: 3,
      }}
      outerRadius={"70%"}
      innerRadius={45}
      data={data}
    />
  );
};

export default MarketDetailsPieChart;
