import React, { useContext } from "react";
import { PieChart } from "react-native-svg-charts";
import { ChartContext } from "../../context/ChartContext";

const PieChartExample = () => {
  const { chartIndex, setChartIndex } = useContext(ChartContext);
  const data = [
    {
      key: 1,
      value: 50,
      svg: { fill: chartIndex === 1 ? "#8A92B2" : "#600080" },
      onPress: () => {
        setChartIndex(1);
      },
      arc: chartIndex === 1 ? { outerRadius: "130%", cornerRadius: 10 } : null,
    },
    {
      key: 2,
      value: 50,
      svg: { fill: chartIndex === 2 ? "#36B4C4" : "#9900cc" },
      onPress: () => setChartIndex(2),
      arc: chartIndex === 2 ? { outerRadius: "130%", cornerRadius: 10 } : null,
    },
    {
      key: 3,
      value: 40,
      svg: { fill: chartIndex === 3 ? "#FF007A" : "#c61aff" },
      onPress: () => setChartIndex(3),
      arc: chartIndex === 3 ? { outerRadius: "130%", cornerRadius: 10 } : null,
    },
    {
      key: 4,
      value: 95,
      svg: { fill: chartIndex === 4 ? "#00D395" : "#ecb3ff" },
      onPress: () => setChartIndex(4),
      arc: chartIndex === 4 ? { outerRadius: "130%", cornerRadius: 10 } : null,
    },
    {
      key: 5,
      value: 35,
      svg: { fill: chartIndex === 5 ? "#AF71BD" : "#d966ff" },

      onPress: () => setChartIndex(5),
      arc: chartIndex === 5 ? { outerRadius: "130%", cornerRadius: 10 } : null,
    },
  ];

  return (
    <PieChart
      style={{ height: 120, width: 120, marginRight: 10 }}
      outerRadius={"70%"}
      innerRadius={20}
      data={data}
    />
  );
};

export default PieChartExample;
