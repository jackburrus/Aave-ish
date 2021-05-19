import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Dimensions } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { ExchangeContainer } from "../../components/ExchangeContainer/ExchangeContainer";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { APYCard } from "../LendScreen/APYCard";
interface BorrowScreenProps {}

const { width } = Dimensions.get("window");

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

  width: ${width - 30}px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const LendButtonContainer = styled.View`
  display: flex;
  flex: 0.5;
  align-items: center;
`;

export const BorrowScreen = (props: BorrowScreenProps) => {
  return (
    <BorrowScreenContainer>
      <ExchangeContainer type={"Borrow"} />
      <CardContainer>
        <APYCard title="APY" subtitle="stable" percentage={3.1} />
        <APYCard title="APY" subtitle="variable" percentage={4.5} />
      </CardContainer>
      <LendButtonContainer>
        <SubmitButton />
      </LendButtonContainer>
    </BorrowScreenContainer>
  );
};
