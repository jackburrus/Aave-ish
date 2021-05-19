import { AntDesign, Feather } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import { Alert, Dimensions, Pressable } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { useToast } from "react-native-styled-toast";
import styled, { useTheme } from "styled-components/native";
interface SubmitButtonProps {}
const { width, height } = Dimensions.get("window");

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const BUTTON_WIDTH = width / 2.5;
const BUTTON_RADIUS = 20;
const StyledButtonContainer = styled(AnimatedPressable)`
  width: ${BUTTON_WIDTH}px;
  height: 50px;

  border-radius: ${BUTTON_RADIUS}px;

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
  const checkOpacity = useSharedValue(0);
  const {
    lightBlueHighlight,
    liquidGreen,
    lightBlue,
    main,
    lightGreen,
  } = useTheme();
  const { toast } = useToast();

  const onPress = useCallback(() => {
    progress.value = withTiming(progress.value === 0 ? 1 : 0);
    translateX.value = withDelay(
      500,
      withTiming(translateX.value === 0 ? 100 : 0),
    );
    checkOpacity.value = withDelay(
      1500,
      withTiming(checkOpacity.value === 0 ? 1 : 0),
    );
  }, [progress, translateX, checkOpacity]);

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
      [lightGreen, liquidGreen],
    ) as string,
    width: withTiming(
      interpolate(translateX.value, [0, 100], [BUTTON_WIDTH, 50]),
    ),

    borderRadius: withTiming(
      interpolate(translateX.value, [0, 100], [BUTTON_RADIUS, 100]),
    ),
  }));

  const animatedTextStyles = useAnimatedStyle(() => {
    const value = interpolate(progress.value, [0, 1], [1, 0]);
    return {
      opacity: value,
    };
  });

  const animatedCheckIconStyles = useAnimatedStyle(() => {
    return {
      opacity: checkOpacity.value,
    };
  });

  const ToastConfig = {
    closeIconName: "arrow-up-right",
    duration: 2000,
    onPress: () => Alert.alert("Viewing on Etherscan"),
  };

  return (
    <StyledButtonContainer
      style={animatedBackground}
      onPress={() => {
        onPress();
        setTimeout(() => {
          toast({ message: "View on Etherscan", ...ToastConfig });
        }, 2000);
      }}
    >
      <Animated.View style={animatedIconStyles}>
        <Feather
          name="send"
          size={20}
          color={main}
          style={{
            marginRight: 15,
            transform: [{ rotateZ: "45deg" }],
            opacity: 0.6,
          }}
        />
      </Animated.View>

      <Animated.View style={animatedTextStyles}>
        <StyledButtonText style={{ color: main, opacity: 0.6 }}>
          Submit
        </StyledButtonText>
      </Animated.View>
      <Animated.View
        style={[{ position: "absolute" }, animatedCheckIconStyles]}
      >
        <AntDesign name="check" size={24} color={"white"} />
      </Animated.View>
    </StyledButtonContainer>
  );
};
