import React from "react";
import { Dimensions, View, Text } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
  useChartData,
  ChartYLabel,
} from "@rainbow-me/animated-charts";
import { useTheme } from "styled-components";
import { APYChartLabel } from "./APYChartLabel";
export const { width: SIZE } = Dimensions.get("window");

export const data = [
  { x: 1453075200, y: 1.47 },
  { x: 1453161600, y: 1.37 },
  { x: 1453248000, y: 1.53 },
  { x: 1453334400, y: 1.54 },
  { x: 1453420800, y: 1.52 },
  { x: 1453507200, y: 2.03 },
  { x: 1453593600, y: 2.1 },
  { x: 1453680000, y: 2.5 },
  { x: 1453766400, y: 2.3 },
  { x: 1453852800, y: 2.42 },
  { x: 1453939200, y: 2.55 },
  { x: 1454025600, y: 2.41 },
  { x: 1454112000, y: 2.43 },
  { x: 1454198400, y: 2.2 },
];

const getData = (type, subtitle) => {
  if (type === "Deposit APY") {
    return [
      { x: 1453075200, y: 1.47 },
      { x: 1453161600, y: 1.37 },
      { x: 1453248000, y: 1.53 },
      { x: 1453334400, y: 1.54 },
      { x: 1453420800, y: 1.52 },
      { x: 1453507200, y: 2.03 },
      { x: 1453593600, y: 2.1 },
      { x: 1453680000, y: 2.5 },
      { x: 1453766400, y: 2.3 },
      { x: 1453852800, y: 2.42 },
      { x: 1453939200, y: 2.55 },
      { x: 1454025600, y: 2.41 },
      { x: 1454112000, y: 2.43 },
      { x: 1454198400, y: 2.2 },
    ];
  } else if (subtitle === "(stable)") {
    return [
      { x: 1453075200, y: 12.17 },
      { x: 1453161600, y: 12.97 },
      { x: 1453248000, y: 12.43 },
      { x: 1453334400, y: 13.54 },
      { x: 1453420800, y: 14.52 },
      { x: 1453507200, y: 14.03 },
      { x: 1453593600, y: 14.1 },
      { x: 1453680000, y: 14.5 },
      { x: 1453766400, y: 14.3 },
      { x: 1453852800, y: 14.42 },
      { x: 1453939200, y: 14.15 },
      { x: 1454025600, y: 14.41 },
      { x: 1454112000, y: 14.43 },
      { x: 1454198400, y: 14.2 },
    ];
  } else if (subtitle === "(variable)") {
    return [
      { x: 1453075200, y: 1.17 },
      { x: 1453161600, y: 1.97 },
      { x: 1453248000, y: 1.43 },
      { x: 1453334400, y: 1.54 },
      { x: 1453420800, y: 1.52 },
      { x: 1453507200, y: 3.03 },
      { x: 1453593600, y: 2.1 },
      { x: 1453680000, y: 1.5 },
      { x: 1453766400, y: 2.3 },
      { x: 1453852800, y: 2.42 },
      { x: 1453939200, y: 4.15 },
      { x: 1454025600, y: 2.41 },
      { x: 1454112000, y: 2.43 },
      { x: 1454198400, y: 2.2 },
    ];
  }
};

const getY = (value, defaultValue) => {
  "worklet";

  return !value ? defaultValue : `${value.substring(0, 4)} %`;
};
const APYChart = (props) => {
  const { main, liquidGreen } = useTheme();
  const { type, subtitle, defaultValue } = props;
  const data = getData(type, subtitle);
  const points = monotoneCubicInterpolation({ data, range: 40 });
  return (
    <View
      style={{
        backgroundColor: "transparent",
      }}
    >
      <ChartPathProvider
        data={{
          points,
          smoothingStrategy: "bezier",
        }}
      >
        <ChartPath height={60} stroke={main} width={SIZE / 2} />
        <ChartDot
          style={{
            backgroundColor: main,
          }}
        />
        <ChartYLabel
          style={{
            position: "absolute",
            top: 40,
            left: -90,
            fontSize: 24,
            fontFamily: "Rubik_500Medium",
            color: main,
            opacity: 0.8,
          }}
          format={(value) => getY(value, defaultValue)}
        />
      </ChartPathProvider>
    </View>
  );
};
export default APYChart;

// font-size: 24px;

//   color: ${(props) => props.theme.main};
//   font-family: "Rubik_500Medium";
//   opacity: 0.8;
//   margin-top: 10px;
