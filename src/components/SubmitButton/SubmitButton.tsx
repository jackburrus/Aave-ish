import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import styled from "styled-components/native";
interface SubmitButtonProps {}
const { width, height } = Dimensions.get("window");
import { Feather } from "@expo/vector-icons";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const StyledButtonContainer = styled.Pressable`
  width: ${width / 1.8}px;
  height: 60px;

  border-radius: 20px;
  background-color: ${(props) => props.theme.lightBlueHighlight};
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

  const onPress = useCallback(() => {
    // setClicked(!clicked);
    // setTextColor(switchState ? 'rgb(72,202,228)' : 'white')
    progress.value = withTiming(progress.value === 0 ? 1 : 0);
  }, [progress]);

  const animatedIconStyles = useAnimatedStyle(() => {
    const value = interpolate(
      progress.value,
      [0, 8],
      [0, 360],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{ rotateZ: `${value}deg` }],
    };
  });

  const animatedTextStyles = useAnimatedStyle(() => {
    const value = interpolate(progress.value, [0, 1], [1, 0]);
    return {
      opacity: value,
    };
  });

  return (
    <StyledButtonContainer onPress={onPress}>
      <Animated.View style={animatedIconStyles}>
        <Feather
          name="send"
          size={20}
          color="white"
          style={{ marginRight: 10 }}
        />
      </Animated.View>
      <Animated.View style={animatedTextStyles}>
        <StyledButtonText style={{ color: "white" }}>Submit</StyledButtonText>
      </Animated.View>
    </StyledButtonContainer>
  );
};
