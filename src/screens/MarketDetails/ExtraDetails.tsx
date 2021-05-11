import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
interface ExtraDetailsProps {
  title: string;
  detail: JSX.Element;
  percentage: boolean;
  percentageAmount: string | undefined;
}

const ExtraDetailsContainer = styled.View`
  border: 1px solid white;
  /* width: 200; */
  /* height: 30; */
  border-radius: 20px;
  justify-content: center;
  padding-left: 10px;
  margin-right: 20px;
  margin-top: 10px;
  flex-direction: row;
`;

const ExtraDetailsPercentage = (props) => {
  const { percentageAmount } = props;
  return (
    <View style={{ borderWidth: 1, marginLeft: 15 }}>
      <Text style={{ color: "white" }}>{percentageAmount}</Text>
    </View>
  );
};

export const ExtraDetails = (props: ExtraDetailsProps) => {
  const { title, detail, percentage, percentageAmount } = props;
  return (
    <ExtraDetailsContainer>
      <Text style={{ color: "white" }}>{title}</Text>
      {percentage ? (
        <ExtraDetailsPercentage percentageAmount={percentageAmount} />
      ) : null}
    </ExtraDetailsContainer>
  );
};
