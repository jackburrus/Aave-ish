import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen.screen";
import HomeStackNavigator from "./HomeStackNavigator";
import { WalletScreen } from "../screens/HomeScreen/Wallet.screen";
import { DashBoard } from "../screens/Dashboard/Dashboard.screen";
import { MainDrawerNavigator } from "./DrawerNavigator";

const Tab = createMaterialBottomTabNavigator();

function RootTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainDrawerNavigator} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Dashboard" component={DashBoard} />

      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default RootTabNavigator;
