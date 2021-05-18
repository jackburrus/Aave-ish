import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen.screen";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Dimensions } from "react-native";
import Constants from "expo-constants";
import { Avatar } from "react-native-paper";
import styled, { useTheme } from "styled-components/native";
import AaveIcon from "../assets/icons/AaveIcon";
import HomeStackNavigator from "./HomeStackNavigator";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TransactionData } from "../mockdata/TransactionData";
import { BorrowDepositRow } from "../components/TransactionHistoryRow/BorrowDeposit";
import { CollateralChangeRow } from "../components/TransactionHistoryRow/CollateralChangeRow";
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
  padding-top: ${Constants.statusBarHeight}px;
`;
const StyledHeaderContainer = styled.View`
  /* border: 1px solid red; */
  display: flex;
  flex: 0.2;
  width: ${width}px;
  justify-content: center;
  align-items: flex-start;
  padding-right: 10px;
`;
const StyledProfileDetailsContainer = styled.View`
  /* border: 1px solid red; */
  display: flex;
  flex: 1;
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;
const StyledTransactionHistoryContainer = styled.ScrollView`
  /* border: 1px solid red; */
  display: flex;
  flex: 2;
  width: ${width}px;
`;

const StyledNameText = styled.Text`
  color: ${(props) => props.theme.lightGreen};
  font-size: 28px;
  font-family: "Rubik_500Medium";
  margin-top: 10px;
`;

const CustomDrawer = ({ navigation }) => {
  const { main, lightGreen } = useTheme();
  return (
    <StyledDrawerContainer>
      <StyledHeaderContainer>
        {/* <Pressable>

          </Pressable> */}
        <MaterialIcons
          onPress={() => navigation.toggleDrawer()}
          name="arrow-forward-ios"
          size={36}
          color={lightGreen}
        />
      </StyledHeaderContainer>
      <StyledProfileDetailsContainer>
        <Avatar.Image size={100} source={require("../assets/avatar.png")} />
        <StyledNameText>Margaret Sullivan</StyledNameText>
      </StyledProfileDetailsContainer>
      <StyledNameText
        style={{ fontSize: 18, marginBottom: 10, marginLeft: 10 }}
      >
        History
      </StyledNameText>
      <StyledTransactionHistoryContainer
        contentContainerStyle={{ alignItems: "center" }}
      >
        {TransactionData.map((transaction) => {
          if (
            transaction.type === "Borrowed" ||
            transaction.type === "Deposit"
          ) {
            return (
              <BorrowDepositRow
                type={transaction.type}
                currency={transaction.currency}
                amountCrypto={transaction.amountCrypto}
                amountUSD={transaction.amountUSD}
                changeCollateral={transaction.changeCollateral}
                iconImageSource={transaction.iconImageSource}
              />
            );
          } else if (transaction.type === "Collateral Change") {
            return <CollateralChangeRow />;
          }
        })}
      </StyledTransactionHistoryContainer>
    </StyledDrawerContainer>
  );
};

export const MainDrawerNavigator = () => {
  const theme = useTheme();
  return (
    <Drawer.Navigator
      drawerPosition={"right"}
      drawerContent={({ navigation }) => (
        <CustomDrawer navigation={navigation} />
      )}
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
