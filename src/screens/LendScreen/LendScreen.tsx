import React from "react";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import { ExchangeContainer } from "../../components/ExchangeContainer/ExchangeContainer";
import { APYCard } from "./APYCard";
import { HealthFactorCard } from "./HealthFactorCard";
import styled, { useTheme } from "styled-components/native";
import { EvilIcons } from "@expo/vector-icons";

interface LendScreenProps {}

const { width, height } = Dimensions.get("window");

const LendScreenContainer = styled.View`
  background-color: ${(props) => props.theme.main};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
`;
const CardContainer = styled.View`
  display: flex;
  flex: 1;
  padding-top: 30px;
  padding-left: 5px;
  padding-right: 5px;
  /* border: 1px solid white; */
  width: ${width - 30}px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const LendButtonContainer = styled.View`
  /* border: 1px solid white; */
  display: flex;
  flex: 1.1;
  align-items: center;

  /* padding: 50px; */
`;

const LendButton = styled.Pressable`
  width: 170px;
  height: 70px;
  /* border: 1px solid purple; */
  background-color: ${(props) => props.theme.lightPurple};
  border-radius: 20px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding-right: 10px;
  padding-left: 10px;
`;
const StyledLendText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 24px;
  font-family: "Rubik_500Medium";
  opacity: 0.8;
`;

export const LendScreen = (props: LendScreenProps) => {
  const { main } = useTheme();
  return (
    <LendScreenContainer>
      <ExchangeContainer />
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <CardContainer>
          <HealthFactorCard />
          <APYCard />
        </CardContainer>
        <LendButtonContainer>
          <LendButton onPress={() => Alert.alert("Submitted deposit.")}>
            <StyledLendText>Lend</StyledLendText>
            <EvilIcons name="arrow-up" size={32} color={main} />
          </LendButton>
        </LendButtonContainer>
      </View>
    </LendScreenContainer>
  );
};
