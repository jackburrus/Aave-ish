import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { Dimensions } from "react-native";

import { CustomDrawer } from "./CustomDrawer";
import HomeStackNavigator from "./HomeStackNavigator";
const { width } = Dimensions.get("window");

const Drawer = createDrawerNavigator();

export const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerPosition={"right"}
      drawerContent={({ navigation }) => (
        <CustomDrawer navigation={navigation} />
      )}
      drawerStyle={{ width: width }}
    >
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
    </Drawer.Navigator>
  );
};
