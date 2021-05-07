import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionButton } from "./src/components/ActionButton/ActionButton.component";
import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen.screen";
import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "./src/theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <HomeScreen />
    </ThemeProvider>
  );
}
