import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import styled, { useTheme } from "styled-components/native";
interface SubmitButtonProps {}
const { width, height } = Dimensions.get("window");
import { Feather } from "@expo/vector-icons";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const BUTTON_WIDTH = width / 1.8;
const BUTTON_RADIUS = 20;
const StyledButtonContainer = styled(AnimatedPressable)`
  width: ${BUTTON_WIDTH}px;
  height: 50px;

  border-radius: ${BUTTON_RADIUS}px;
  /* background-color: ${(props) => props.theme.lightBlueHighlight}; */
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledButtonText = styled.Text`
  font-family: "Rubik_500Medium";
  font-size: 18px;
`;

export const SubmitButton = (props: SubmitButtonProps) => {
  const [clicked, setClicked] = useState(false);
  const progress = useSharedValue(0);
  const translateX = useSharedValue(0);
  const { lightBlueHighlight, liquidGreen } = useTheme();

  const onPress = useCallback(() => {
    // setClicked(!clicked);
    // setTextColor(switchState ? 'rgb(72,202,228)' : 'white')
    progress.value = withTiming(progress.value === 0 ? 1 : 0);
    translateX.value = withDelay(
      500,
      withTiming(translateX.value === 0 ? 100 : 0),
    );
    // translateX.value = withTiming(100);
  }, [progress, translateX]);

  const animatedIconStyles = useAnimatedStyle(() => {
    const opacityValue = interpolate(translateX.value, [0, 100], [1, 0]);
    return {
      transform: [{ translateX: translateX.value }],
      opacity: opacityValue,
    };
  });

  const animatedBackground = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      translateX.value,
      [0, 100],
      [lightBlueHighlight, liquidGreen],
    ) as string,
    width: withTiming(
      interpolate(translateX.value, [0, 100], [BUTTON_WIDTH, 50]),
    ),

    borderRadius: withTiming(
      interpolate(translateX.value, [0, 100], [BUTTON_RADIUS, 100]),
    ),
  }));

  // useEffect(() => {
  //   // if (progress.value === 1) {
  //   //   console.log("ran");
  //   translateX.value = withTiming(translateX.value === 1 ? 100 : 0);
  //   // }
  // }, [progress.value]);

  const animatedTextStyles = useAnimatedStyle(() => {
    const value = interpolate(progress.value, [0, 1], [1, 0]);
    return {
      opacity: value,
    };
  });

  return (
    <StyledButtonContainer onPress={onPress} style={animatedBackground}>
      <Animated.View style={animatedIconStyles}>
        <Feather
          name="send"
          size={20}
          color="white"
          style={{ marginRight: 15, transform: [{ rotateZ: "45deg" }] }}
        />
      </Animated.View>

      <Animated.View style={animatedTextStyles}>
        <StyledButtonText style={{ color: "white" }}>Submit</StyledButtonText>
      </Animated.View>
    </StyledButtonContainer>
  );
};
