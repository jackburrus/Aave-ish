import React, { useContext, useEffect } from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  Extrapolate,
  useAnimatedStyle,
  withDelay,
  withTiming,
  interpolate,
  Easing,
} from "react-native-reanimated";
import { ChartContext } from "../../context/ChartContext";

interface PieChartIconProps {}

const { width } = Dimensions.get("window");

export const PieChartIcon = (props: PieChartIconProps) => {
  const { chartIndex } = useContext(ChartContext);
  const iconOpacity = useSharedValue(0);
  const opacityProgress = useSharedValue(0);
  useEffect(() => {
    opacityProgress.value = 0;
    opacityProgress.value = withTiming(1, {
      duration: 650,
      easing: Easing.inOut(Easing.ease),
    });
    console.log("ran index");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartIndex]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacityProgress.value,
  }));
  return (
    <Animated.View
      style={[{ position: "absolute", right: width / 4 + 2 }, animatedStyle]}
    >
      <Text>{chartIndex}</Text>
    </Animated.View>
  );
};
