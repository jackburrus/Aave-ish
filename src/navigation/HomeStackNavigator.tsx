import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen.screen";
import { LendScreen } from "../screens/LendScreen";
import { BorrowScreen } from "../screens/BorrowScreen";

const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Lend" component={LendScreen} />
      <Stack.Screen name="Borrow" component={BorrowScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
