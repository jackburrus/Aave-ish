import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import { IconContainer } from "../ActionButton/ActionButton";

const { width } = Dimensions.get("window");

const StyledMarketRowContainer = styled.Pressable`
  width: ${width - 50}px;

  height: 100px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.lightGreen};

  margin-top: 20px;
  flex-direction: row;
`;

const StyledIconContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledDetailsContainer = styled.View`
  display: flex;
  flex: 2;
  flex-direction: row;
  margin-right: 10px;
`;
const StyledMarketSizeContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledAPYContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledMarketSizeText = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 16px;
  font-family: "Rubik_500Medium";
  padding-bottom: 5px;
`;

const StyledMarketRowValue = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 14px;
  font-family: "Rubik_500Medium";
  opacity: 0.6;
`;

interface MarketRowProps {
  marketSize: string;
  depositAPY: number;
  bgColor: string;
  icon: ImageSourcePropType;
  asset: string;
  iconContainerHighlight: string;
}

export const MarketRow = (props: MarketRowProps) => {
  const {
    marketSize,
    depositAPY,
    bgColor,
    icon,
    asset,
    iconContainerHighlight,
  } = props;
  const navigation = useNavigation();

  return (
    <StyledMarketRowContainer
      style={{ backgroundColor: bgColor }}
      onPress={() => {
        navigation.navigate("MarketDetails", { props });
      }}
    >
      <StyledIconContainer>
        <IconContainer
          style={{ width: 70, height: 70 }}
          shadowColor={"rgba(88, 90, 88, 0.2)"}
        >
          <Image source={icon} style={{ width: 40, height: 40 }} />
        </IconContainer>
      </StyledIconContainer>
      <StyledDetailsContainer>
        {/* <StyledAPYContainerCustom /> */}
        <StyledMarketSizeContainer>
          <StyledMarketSizeText>Market Size</StyledMarketSizeText>
          <StyledMarketRowValue>{marketSize}</StyledMarketRowValue>
        </StyledMarketSizeContainer>
        <StyledAPYContainer>
          <StyledMarketSizeText>Deposit APY</StyledMarketSizeText>
          <StyledMarketRowValue>{depositAPY}%</StyledMarketRowValue>
        </StyledAPYContainer>
      </StyledDetailsContainer>
    </StyledMarketRowContainer>
  );
};
