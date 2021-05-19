import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Divider, Menu, Provider } from "react-native-paper";
import styled, { useTheme } from "styled-components/native";
import { MarketsData } from "../../mockdata/Markets";

const { width, height } = Dimensions.get("window");

const StyledExchangeContainer = styled.View`
  width: ${width - 30}px;
  display: flex;
  flex: 1;
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
  margin: 20px;
  height: 75px;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
`;

const AmountTextInput = styled.TextInput`
  color: ${(props) => props.theme.main};
  opacity: 0.5;
  font-size: 42px;
`;

const CoinContainer = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

const StyledAssetText = styled.Text`
  color: ${(props) => props.theme.main};

  font-size: 16px;
  font-family: "Rubik_500Medium";
`;

const StyledSubText = styled.Text`
  color: ${(props) => props.theme.main};
  opacity: 0.5;
  font-size: 18px;
  font-family: "Rubik_500Medium";
  margin-top: 30px;
  margin-left: 30px;
`;

const StyledPortfolioContainer = styled.View`
  margin: 20px;
  height: 75px;

  align-items: center;
  padding-left: 20px;
  flex-direction: row;
  border: 1px solid rgba(10.6, 11.4, 35.7, 0.2);
  border-radius: 5px;
`;

const StyledPortfolioAmount = styled.Text`
  color: ${(props) => props.theme.main};
  opacity: 0.5;
  font-size: 18px;
  font-family: "Rubik_500Medium";

  margin-left: 50px;
`;

interface ExchangeContainerProps {
  type: string;
}

export const ExchangeContainer = (props: ExchangeContainerProps) => {
  const { type } = props;
  const { main, lightPurple, greyish, darkPurple, menuPurple } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const [activeCoin, setActiveCoin] = useState(0);
  const [amount, onChangeAmount] = useState(null);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <StyledExchangeContainer>
          <LendTitle>
            {type === "Deposit" ? "You Deposit" : "You Borrow"}
          </LendTitle>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            style={{
              marginLeft: 20,
              width: width - 70,
            }}
            contentStyle={{ backgroundColor: menuPurple }}
            anchor={
              <AmountAndCoinContainer>
                <AmountTextInput
                  value={amount}
                  placeholder={"0.000"}
                  keyboardType={"numeric"}
                  onChangeText={onChangeAmount}
                />
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
                    <Image
                      source={coin.icon}
                      style={{ width: 30, height: 30 }}
                    />
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
          <Divider style={{ marginRight: 20, marginLeft: 20 }} />
          <StyledSubText>Your Portfolio</StyledSubText>
          <StyledPortfolioContainer>
            <Image
              source={MarketsData[activeCoin].icon}
              style={{ width: 30, height: 30, marginRight: 10 }}
            />
            <StyledAssetText>{MarketsData[activeCoin].asset}</StyledAssetText>
            <StyledPortfolioAmount>$100,432.49</StyledPortfolioAmount>
          </StyledPortfolioContainer>
        </StyledExchangeContainer>
      </TouchableWithoutFeedback>
    </Provider>
  );
};
