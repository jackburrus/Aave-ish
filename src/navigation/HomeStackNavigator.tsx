import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen.screen";
import { LendScreen } from "../screens/LendScreen";
import { BorrowScreen } from "../screens/BorrowScreen";
import AaveIcon from "../assets/icons/AaveIcon";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { View } from "react-native";
import { MarketDetails } from "../screens/MarketDetails/MarketDetails.screen";

import { Avatar } from "react-native-paper";

const Stack = createStackNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <AaveIcon
      style={{ marginLeft: 20, marginBottom: 5 }}
      onPress={() => {
        navigation.navigate("Home");
      }}
    />
  );
};

export const HeaderRight = () => {
  return (
    <Avatar.Image
      size={48}
      style={{ marginRight: 20 }}
      source={require("../assets/avatar.png")}
    />
  );
};

function HomeStackNavigator() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={"Lend"}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
        headerStyle: {
          backgroundColor: theme.main,
          shadowColor: "transparent",
        },
        title: "",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Lend" component={LendScreen} />
      <Stack.Screen name="Borrow" component={BorrowScreen} />
      <Stack.Screen name="MarketDetails" component={MarketDetails} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
