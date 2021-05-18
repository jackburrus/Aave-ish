import React from "react";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import { ExchangeContainer } from "../../components/ExchangeContainer/ExchangeContainer";
import { APYCard } from "./APYCard";
import { HealthFactorCard } from "./HealthFactorCard";
import styled, { useTheme } from "styled-components/native";
import { EvilIcons } from "@expo/vector-icons";
import SwipeButton from "rn-swipe-button";
import lend from "../../assets/Lend.png";
import { Entypo } from "@expo/vector-icons";

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
  font-size: 28px;
  font-family: "Rubik_500Medium";
  opacity: 0.8;
`;

export const LendScreen = (props: LendScreenProps) => {
  const { main, lightPurple } = useTheme();

  const ArrowIcon = () => (
    <Entypo name="arrow-with-circle-right" size={64} color={lightPurple} />
  );
  return (
    <LendScreenContainer>
      <ExchangeContainer type={"Deposit"} />
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <CardContainer>
          <HealthFactorCard />
          <APYCard title="APY" percentage={3.1} />
        </CardContainer>
        <LendButtonContainer>
          <SwipeButton
            thumbIconBackgroundColor="transparent"
            shouldResetAfterSuccess={true}
            thum
            thumbIconComponent={ArrowIcon}
            railBackgroundColor="rgba(255, 255, 255, 0.2)"
            railBorderColor="transparent"
            titleColor={lightPurple}
            title={"Swipe to Deposit"}
            thumbIconBorderColor="transparent"
            // title={"Lend"}
            height={70}
            width={350}
            railStyles={{
              backgroundColor: "rgba(255, 255, 255, 0)",
              borderColor: "transparent",
            }}
            onSwipeStart={() => console.log("Swipe started!")}
            onSwipeFail={() => console.log("Incomplete swipe!")}
            onSwipeSuccess={() => Alert.alert("Submitted!")}
          />
        </LendButtonContainer>
      </View>
    </LendScreenContainer>
  );
};
