import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen.screen";
import { LendScreen } from "../screens/LendScreen";
import { BorrowScreen } from "../screens/BorrowScreen";
import AaveIcon from "../assets/icons/AaveIcon";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

const Stack = createStackNavigator();

//Hamburger menu
const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <AaveIcon
      style={{ marginLeft: 10 }}
      onPress={() => {
        navigation.navigate("Home");
      }}
    />
  );
};

function HomeStackNavigator() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
        headerStyle: {
          backgroundColor: theme.main,
          shadowColor: "transparent",
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Lend" component={LendScreen} />
      <Stack.Screen name="Borrow" component={BorrowScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
