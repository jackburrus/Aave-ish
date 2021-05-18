import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen.screen";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Dimensions } from "react-native";
import { Avatar } from "react-native-paper";
import styled, { useTheme } from "styled-components/native";
import AaveIcon from "../assets/icons/AaveIcon";
import HomeStackNavigator from "./HomeStackNavigator";
import { Text } from "react-native";

const { width, height } = Dimensions.get("window");

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

const StyledDrawerContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.main};
  justify-content: center;
  align-items: center;
`;

const CustomDrawer = () => {
  return (
    <StyledDrawerContainer>
      <Text>Hello</Text>
    </StyledDrawerContainer>
  );
};

export const MainDrawerNavigator = () => {
  const theme = useTheme();
  return (
    <Drawer.Navigator
      drawerPosition={"right"}
      drawerContent={CustomDrawer}
      drawerStyle={{ width: width }}
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
