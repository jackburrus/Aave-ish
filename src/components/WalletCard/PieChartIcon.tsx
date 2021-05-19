import React, { useContext, useEffect } from "react";
import { Dimensions, Image } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ChartContext } from "../../context/ChartContext";
import { WalletData } from "../../mockdata/Markets";

interface PieChartIconProps {}

const { width } = Dimensions.get("window");

export const PieChartIcon = (props: PieChartIconProps) => {
  const { chartIndex } = useContext(ChartContext);
  const iconOpacity = useSharedValue(0);
  const opacityProgress = useSharedValue(0);
  useEffect(() => {
    opacityProgress.value = 0;
    opacityProgress.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });
  }, [chartIndex]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacityProgress.value,
  }));
  return (
    <Animated.View
      style={[{ position: "absolute", right: width / 4.4 }, animatedStyle]}
    >
      <Image
        style={{ width: 30, height: 30 }}
        source={WalletData[chartIndex - 1]?.coinImage}
      />
    </Animated.View>
  );
};
