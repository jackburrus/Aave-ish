import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";
import { Button, Menu, Divider } from "react-native-paper";

import styled, { useTheme } from "styled-components/native";
import { MarketsData } from "../../mockdata/Markets";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const StyledExchangeContainer = styled.View`
  /* height: ${height / 0.2}px; */
  height: 400px;
  width: ${width - 30}px;

  border-radius: 30px;
  background-color: #f8f0fe;
  box-shadow: 4px 5px 0.5px ${(props) => props.theme.lightPurple};
`;

const LendTitle = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 22px;
  font-family: "Rubik_500Medium";
  margin-top: 30px;
  margin-left: 30px;
`;

const AmountAndCoinContainer = styled.View`
  /* border: 1px solid white; */
  margin: 20px;
  height: 75px;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
`;

const AmountText = styled.Text`
  color: ${(props) => props.theme.main};
  opacity: 0.5;
  font-size: 42px;
`;

const CoinContainer = styled.Pressable`
  /* border: 1px solid black; */
  flex-direction: row;
  align-items: center;
`;

const StyledAssetText = styled.Text`
  color: ${(props) => props.theme.main};
  /* opacity: 0.5; */
  font-size: 16px;
  font-family: "Rubik_500Medium";
`;

const StyledModal = styled(Modal)`
  background-color: white;
  padding: 20px;
`;

export const ExchangeContainer = (props: ExchangeContainerProps) => {
  const { main, lightPurple, greyish, darkPurple } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const [activeCoin, setActiveCoin] = useState(0);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <StyledExchangeContainer>
        <LendTitle>You Lend</LendTitle>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          style={{
            // borderWidth: 1,
            // borderColor: "red",
            marginLeft: 20,
            width: width - 70,
          }}
          contentStyle={{ backgroundColor: "#cfc1e7" }}
          anchor={
            <AmountAndCoinContainer>
              <AmountText>4.237</AmountText>
              <CoinContainer onPress={openMenu}>
                <Image
                  source={MarketsData[activeCoin].icon}
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <StyledAssetText>
                  {MarketsData[activeCoin].asset}
                </StyledAssetText>
                <AntDesign
                  name="down"
                  size={20}
                  color={main}
                  style={{ marginLeft: 10, marginRight: 10 }}
                />
              </CoinContainer>
            </AmountAndCoinContainer>
          }
        >
          {MarketsData.map((coin, index) => {
            return (
              <Menu.Item
                key={index}
                icon={() => (
                  <Image source={coin.icon} style={{ width: 30, height: 30 }} />
                )}
                titleStyle={{ color: main, fontFamily: "Rubik_400Regular" }}
                onPress={() => {
                  setActiveCoin(index);
                  closeMenu();
                }}
                title={coin.asset}
              />
            );
          })}
        </Menu>
      </StyledExchangeContainer>
      <Portal>
        {/* <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            backgroundColor: "white",
            margin: 20,
            padding: 20,
            height: 500,
            borderRadius: 20,
            marginBottom: 100,
          }}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal> */}
      </Portal>

      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      ></View>
    </Provider>
  );
};
