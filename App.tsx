import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionButton } from "./src/components/ActionButton/ActionButton.component";
import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen.screen";
import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "./src/theme/theme";
import {
  Rubik_400Regular,
  Rubik_500Medium,
  useFonts,
} from "@expo-google-fonts/rubik";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import RootTabNavigator from "./src/navigation/RootTabNavigator";
import HomeStackNavigator from "./src/navigation/HomeStackNavigator";
import { MainDrawerNavigator } from "./src/navigation/DrawerNavigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <ThemeProvider theme={darkTheme}>
        <MainDrawerNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}
