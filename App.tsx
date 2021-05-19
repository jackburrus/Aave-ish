import {
  Rubik_400Regular,
  Rubik_500Medium,
  useFonts,
} from "@expo-google-fonts/rubik";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React from "react";
import { ToastProvider } from "react-native-styled-toast";
import { ThemeProvider } from "styled-components/native";
import { MainDrawerNavigator } from "./src/navigation/DrawerNavigator";
import { darkTheme } from "./src/theme/theme";

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
        <ToastProvider>
          <MainDrawerNavigator />
        </ToastProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
