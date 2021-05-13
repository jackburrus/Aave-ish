import React from "react";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { ExchangeContainer } from "../../components/ExchangeContainer/ExchangeContainer";
import { APYCard } from "../LendScreen/APYCard";
interface BorrowScreenProps {}
import { Entypo } from "@expo/vector-icons";
import SwipeButton from "rn-swipe-button";

const { width, height } = Dimensions.get("window");

const BorrowScreenContainer = styled.View`
  background-color: ${(props) => props.theme.main};
  display: flex;

  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
`;
const CardContainer = styled.View`
  display: flex;
  flex: 0.5;
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
  flex: 0.5;
  align-items: center;

  /* padding: 50px; */
`;

export const BorrowScreen = (props: BorrowScreenProps) => {
  const { main, lightPurple } = useTheme();
  const ArrowIcon = () => (
    <Entypo name="arrow-with-circle-right" size={64} color={lightPurple} />
  );
  return (
    <BorrowScreenContainer>
      <ExchangeContainer type={"Borrow"} />
      <CardContainer>
        <APYCard title="APY" subtitle="stable" percentage={3.1} />
        <APYCard title="APY" subtitle="variable" percentage={4.5} />
      </CardContainer>
      <LendButtonContainer>
        <SwipeButton
          thumbIconBackgroundColor="transparent"
          // thumbIconImageSource={ArrowIcon}

          thumbIconComponent={ArrowIcon}
          railBackgroundColor="rgba(255, 255, 255, 0.2)"
          railBorderColor="transparent"
          title={"Swipe to Borrow"}
          titleColor={lightPurple}
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
    </BorrowScreenContainer>
  );
};
