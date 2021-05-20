import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import React from "react";
import { Alert, Dimensions, Pressable, View } from "react-native";
import { Avatar } from "react-native-paper";
import styled, { useTheme } from "styled-components/native";
import { BorrowDepositRow } from "../components/TransactionHistoryRow/BorrowDeposit";
import { CollateralChangeRow } from "../components/TransactionHistoryRow/CollateralChangeRow";
import { TransactionData } from "../mockdata/TransactionData";

const { width } = Dimensions.get("window");

const StyledDrawerContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.main};
  justify-content: center;
  align-items: center;
  padding-top: ${Constants.statusBarHeight}px;
`;
const StyledHeaderContainer = styled.View`
  display: flex;
  flex: 0.2;
  width: ${width}px;
  justify-content: center;
  align-items: flex-start;
  padding-right: 10px;
`;
const StyledProfileDetailsContainer = styled.View`
  display: flex;
  flex: 1;
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;
const StyledTransactionHistoryContainer = styled.ScrollView`
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
const StyledLinkText = styled.Text`
  color: ${(props) => props.theme.linkBlue};
  font-size: 12px;
  font-family: "Rubik_500Medium";
`;

export const CustomDrawer = ({ navigation }) => {
  const { main, lightGreen, linkBlue } = useTheme();
  return (
    <StyledDrawerContainer>
      <StyledHeaderContainer>
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
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Pressable
            onPress={() => Alert.alert("Disconnected")}
            style={{ flexDirection: "row" }}
          >
            <AntDesign name="disconnect" size={12} color={linkBlue} />
            <StyledLinkText style={{ marginRight: 10, marginLeft: 5 }}>
              Disconnect Wallet
            </StyledLinkText>
          </Pressable>
          <Pressable
            onPress={() => Alert.alert("Received")}
            style={{ flexDirection: "row" }}
          >
            <AntDesign name="qrcode" size={12} color={linkBlue} />
            <StyledLinkText style={{ marginLeft: 5 }}>Receive</StyledLinkText>
          </Pressable>
        </View>
      </StyledProfileDetailsContainer>
      {/* <View style={{ width: width, paddingLeft: 15 }}> */}
      <StyledNameText
        style={{ fontSize: 20, marginBottom: 10, marginLeft: 10 }}
      >
        Transaction History
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
                key={transaction.index}
                type={transaction.type}
                currency={transaction.currency}
                amountCrypto={transaction.amountCrypto}
                amountUSD={transaction.amountUSD}
                changeCollateral={transaction.changeCollateral}
                iconImageSource={transaction.iconImageSource}
              />
            );
          } else if (transaction.type === "Collateral Change") {
            return (
              <CollateralChangeRow
                key={transaction.index}
                type={transaction.type}
                currency={transaction.currency}
                amountCrypto={transaction.amountCrypto}
                amountUSD={transaction.amountUSD}
                changeCollateral={transaction.changeCollateral}
                iconImageSource={transaction.iconImageSource}
              />
            );
          }
        })}
      </StyledTransactionHistoryContainer>
    </StyledDrawerContainer>
  );
};
