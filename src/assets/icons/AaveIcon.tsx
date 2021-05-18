import * as React from "react";
import Animated, {
  useSharedValue,
  withRepeat,
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Svg, {
  SvgProps,
  G,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function AaveIcon(props: SvgProps) {
  const translationY = useSharedValue<number>(0);

  React.useEffect(() => {
    translationY.value = withRepeat(
      withTiming(-5, {
        duration: 2000,
        easing: Easing.inOut(Easing.quad),
      }),
      -1,
      true,
    );
  }, [translationY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translationY.value }],
  }));
  return (
    <Animated.View style={animatedStyle}>
      <Svg
        width={40}
        height={40}
        viewBox="0 0 55 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <G filter="url(#prefix__filter0_ii)">
          <Path
            d="M0 24v53.5c0 .833.6 2.5 3 2.5s3-1.333 3-2V67c0-.5.2-3.5 3-3.5s3.5 2.833 3.5 3.5v6.5c0 .5 1 2 3 2S18 73.833 18 73v-6c0-2 1.1-4 3.5-4s3 3.333 3 4v3c0 .667.6 2 3 2s3-1 3-1.5v-4c0-.5.6-3 3-3s3 2.5 3 3V73c0 1.5 1 2.5 3 2.5S42 73.833 42 73v-5.5c0-.833.7-4.5 3.5-4.5s3.5 3.667 3.5 4.5V78c0 .667.6 2 3 2s3-1.333 3-2l-.5-54c0-11.5-7.3-24-26.5-24C7 0 0 16 0 24z"
            fill="url(#prefix__paint0_linear)"
          />
        </G>
        <G filter="url(#prefix__filter1_i)">
          <Circle cx={17.5} cy={28.5} r={5.5} fill="#F1F1F3" />
        </G>
        <G filter="url(#prefix__filter2_i)">
          <Circle cx={37.5} cy={28.5} r={5.5} fill="#F1F1F3" />
        </G>
        <Path
          d="M31 38.5c0-.5-1.007 0-4 0-2.993 0-4-.605-4 0 0 1 .8 3.5 4 3.5s4-2.5 4-3.5z"
          fill="#F1F1F3"
        />
        <G filter="url(#prefix__filter3_f)">
          <Path
            stroke="#F1F1F3"
            strokeOpacity={0.5}
            strokeWidth={1.5}
            strokeLinecap="round"
            d="M3.75 34.75v7.5"
          />
        </G>
        <G filter="url(#prefix__filter4_f)">
          <Path
            stroke="#F1F1F3"
            strokeOpacity={0.5}
            strokeWidth={1.5}
            strokeLinecap="round"
            d="M50.75 38.75v3.5"
          />
        </G>
        <G filter="url(#prefix__filter5_f)">
          <Path
            stroke="#F1F1F3"
            strokeOpacity={0.5}
            strokeWidth={1.5}
            strokeLinecap="round"
            d="M50.75 45.75v13.5"
          />
        </G>
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear"
            x1={60.5}
            y1={0}
            x2={-9.5}
            y2={78.5}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#BC7AB4" />
            <Stop offset={1} stopColor="#36B5C4" />
          </LinearGradient>
        </Defs>
      </Svg>
    </Animated.View>
  );
}

export default AaveIcon;
