import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
interface ExtraDetailsProps {
  title: string;
  detail: JSX.Element;
  percentage: boolean;
  percentageAmount: string | undefined;
}

const ExtraDetailsContainer = styled.View`
  /* border: 1px solid white; */
  /* width: 200; */
  /* height: 30; */
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-right: 20px;
  margin-top: 10px;
  flex-direction: row;
`;

const ExtraDetailsPercentage = (props) => {
  const { percentageAmount } = props;
  return (
    <View style={{ marginLeft: 5, marginRight: 10 }}>
      <Text style={{ color: "white", fontSize: 10 }}>{percentageAmount}</Text>
    </View>
  );
};

export const ExtraDetails = (props: ExtraDetailsProps) => {
  const { title, detail, percentage, percentageAmount } = props;
  return (
    <ExtraDetailsContainer>
      <Text style={{ color: "white", fontSize: 10 }}>{title}:</Text>
      {percentage ? (
        <ExtraDetailsPercentage percentageAmount={percentageAmount} />
      ) : (
        <FontAwesome
          name="check-circle"
          size={12}
          style={{
            marginLeft: 8,
            marginRight: 10,
            alignItems: "center",
            justifyContent: "center",
            // borderWidth: 1,
          }}
          color="green"
        />
      )}
    </ExtraDetailsContainer>
  );
};
