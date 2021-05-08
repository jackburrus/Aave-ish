import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen.screen";
import { LendScreen } from "../screens/LendScreen";
import { BorrowScreen } from "../screens/BorrowScreen";
import AaveIcon from "../assets/icons/AaveIcon";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { View } from "react-native";
import { MarketDetails } from "../screens/MarketDetails.screen";

const Stack = createStackNavigator();

//Hamburger menu
const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <AaveIcon
      style={{ marginLeft: 20 }}
      onPress={() => {
        navigation.navigate("Home");
      }}
    />
  );
};

const HeaderRight = () => {
  return (
    <View style={{ width: 50, height: 50, borderWidth: 1, marginRight: 20 }} />
  );
};

function HomeStackNavigator() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
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
