import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

type changeCollateral = {
  from: string;
  to: string;
};

interface BorrowDepositRowProps {
  type: string;
  currency: string;
  amountCrypto: number;
  amountUSD: number;
  changeCollateral: changeCollateral | null;
  iconImageSource: ImageSourcePropType;
}

const RowContainer = styled.View`
  width: ${width}px;
  border: 1px solid white;
  height: 75px;
  flex-direction: row;
`;
const CoinContainer = styled.View`
  display: flex;
  flex: 1;
  border: 1px solid orange;
  flex-direction: row;
`;
const AmountContainer = styled.View`
  display: flex;
  flex: 1;
  border: 1px solid green;
  justify-content: center;
  align-items: flex-end;
  padding-right: 20px;
`;

export const BorrowDepositRow = (props: BorrowDepositRowProps) => {
  const {
    type,
    currency,
    amountCrypto,
    amountUSD,
    changeCollateral,
    iconImageSource,
  } = props;
  return (
    <RowContainer>
      <CoinContainer>
        <Text>Icon</Text>
        <Text>{type}</Text>
        <Text>{currency}</Text>
      </CoinContainer>
      <AmountContainer>
        <Text style={{ color: "white" }}>{amountCrypto}</Text>
        <Text style={{ color: "white" }}>{amountUSD}</Text>
      </AmountContainer>
    </RowContainer>
  );
};
