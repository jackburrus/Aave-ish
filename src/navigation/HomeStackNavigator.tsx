import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen.screen";
import { LendScreen } from "../screens/LendScreen/LendScreen";
import { BorrowScreen } from "../screens/BorrowScreen/BorrowScreen";
import AaveIcon from "../assets/icons/AaveIcon";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { View } from "react-native";
import { MarketDetails } from "../screens/MarketDetails/MarketDetails.screen";

import { Avatar } from "react-native-paper";
import { MainDrawerNavigator } from "./DrawerNavigator";
import { Pressable } from "react-native";

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
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.toggleDrawer()}>
      <Avatar.Image
        size={48}
        style={{ marginRight: 20 }}
        source={require("../assets/avatar.png")}
      />
    </Pressable>
  );
};

function HomeStackNavigator() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      // initialRouteName={"Borrow"}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerLeft: () => <HeaderLeft />,
        headerRight: ({ navigation }) => (
          <HeaderRight navigation={navigation} />
        ),
        headerStyle: {
          backgroundColor: theme.main,
          shadowColor: "transparent",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Deposit"
        component={LendScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Borrow"
        component={BorrowScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="MarketDetails"
        component={MarketDetails}
        options={({ route }) => ({
          title: route.params.props.asset,
          headerTitleStyle: {
            color: theme.lightPurple,
            fontFamily: "Rubik_500Medium",
            fontSize: 18,
          },
        })}
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
