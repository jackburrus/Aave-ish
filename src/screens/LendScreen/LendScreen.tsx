import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Dimensions, View } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { ExchangeContainer } from "../../components/ExchangeContainer/ExchangeContainer";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { APYCard } from "./APYCard";
import { HealthFactorCard } from "./HealthFactorCard";

interface LendScreenProps {}

const { width } = Dimensions.get("window");

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

  width: ${width - 30}px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const LendButtonContainer = styled.View`
  display: flex;
  flex: 1.1;
  align-items: center;
`;

export const LendScreen = (props: LendScreenProps) => {
  return (
    <LendScreenContainer>
      <ExchangeContainer type={"Deposit"} />
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <CardContainer>
          <HealthFactorCard />
          <APYCard title="APY" percentage={3.1} />
        </CardContainer>
        <LendButtonContainer>
          <SubmitButton />
        </LendButtonContainer>
      </View>
    </LendScreenContainer>
  );
};
