import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen.screen";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Avatar } from "react-native-paper";
import { useTheme } from "styled-components";
import AaveIcon from "../assets/icons/AaveIcon";
import HomeStackNavigator from "./HomeStackNavigator";

const Drawer = createDrawerNavigator();

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

export const HeaderRight = ({ navigation }) => {
  console.log(navigation);
  return (
    <Pressable
    //   onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      <Avatar.Image
        size={48}
        style={{ marginRight: 20 }}
        source={require("../assets/avatar.png")}
      />
    </Pressable>
  );
};

export const MainDrawerNavigator = () => {
  const theme = useTheme();
  return (
    <Drawer.Navigator
      drawerPosition={"right"}
      drawerType={"front"}
      //   screenOptions={{
      //     headerLeft: () => <HeaderLeft />,
      //     headerRight: ({ navigation }) => (
      //       <HeaderRight navigation={navigation} />
      //     ),
      //     headerStyle: {
      //       backgroundColor: theme.main,
      //       shadowColor: "transparent",
      //     },
      //   }}
      //   initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
};
