import React, { useContext } from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { ChartContext } from "../../context/ChartContext";

interface PieChartIconProps {}

const { width, height } = Dimensions.get("window");

export const PieChartIcon = (props: PieChartIconProps) => {
  const { chartIndex } = useContext(ChartContext);
  return (
    <Text style={{ position: "absolute", right: width / 4 + 2 }}>
      {chartIndex}
    </Text>
  );
};
