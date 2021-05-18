import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
  Image,
} from "react-native";
import styled, { useTheme } from "styled-components/native";
import BorrowIcon from "../../assets/icons/BorrowIcon";
import { MaterialIcons } from "@expo/vector-icons";
import { IconContainer } from "../ActionButton/ActionButton.component";
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
  width: ${width - 50}px;
  /* border: 1px solid white; */
  height: 75px;
  flex-direction: row;
`;
const CoinContainer = styled.View`
  display: flex;
  flex: 1;
  /* border: 1px solid orange; */
  flex-direction: row;
  align-items: center;
`;
const AmountContainer = styled.View`
  display: flex;
  flex: 1;
  /* border: 1px solid green; */
  justify-content: center;
  align-items: flex-end;
  padding-right: 20px;
`;

const CoinTextContainer = styled.View`
  /* border: 1px solid red; */
  flex: 1;
  justify-content: center;

  padding-left: 10px;
`;

const StyledTypeText = styled.Text`
  color: ${(props) => props.theme.greyish};
  font-size: 10px;
  font-family: "Rubik_500Medium";
`;

const StyledCoinText = styled.Text`
  color: ${(props) => props.theme.lightGreen};
  font-size: 18px;
  font-family: "Rubik_500Medium";
`;

const StyledAmountCryptoText = styled.Text`
  color: ${(props) => props.theme.greyish};
  font-size: 12px;
  font-family: "Rubik_500Medium";
`;

const StyledAmountUSD = styled.Text`
  /* color: ${(props) => props.theme.liquidGreen}; */
  font-size: 18px;
  font-family: "Rubik_500Medium";
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
  const {
    main,
    otherPurple,
    darkPurple,
    greyish,
    liquidGreen,
    lightGreen,
  } = useTheme();
  return (
    <RowContainer>
      <CoinContainer>
        <IconContainer
          style={{
            width: 40,
            height: 40,
            backgroundColor: darkPurple,
            margin: 10,
          }}
          shadowColor={"rgba(88, 90, 88, 0.2)"}
          // shadowColor={iconContainerHighlight}
        >
          <Image source={iconImageSource} style={{ width: 30, height: 30 }} />
        </IconContainer>
        <CoinTextContainer>
          <StyledTypeText>{type}</StyledTypeText>
          <StyledCoinText>{currency}</StyledCoinText>
        </CoinTextContainer>
      </CoinContainer>
      <AmountContainer>
        <StyledAmountCryptoText>{amountCrypto}</StyledAmountCryptoText>
        <StyledAmountUSD
          style={{ color: type === "Borrowed" ? lightGreen : liquidGreen }}
        >
          {amountUSD}
        </StyledAmountUSD>
      </AmountContainer>
    </RowContainer>
  );
};
