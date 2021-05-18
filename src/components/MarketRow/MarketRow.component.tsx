import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { IconContainer } from "../ActionButton/ActionButton.component";
import {
  StyledAPYContainer,
  StyledDetailsContainer,
  StyledIconContainer,
  StyledMarketRowContainer,
  StyledMarketRowValue,
  StyledMarketSizeContainer,
  StyledMarketSizeText,
} from "./MarketRow.styles";
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
        // navigation.setParams({ title: asset });
        navigation.navigate("MarketDetails", { props });
      }}
    >
      <StyledIconContainer>
        <IconContainer
          style={{ width: 70, height: 70 }}
          shadowColor={"rgba(88, 90, 88, 0.2)"}
          // shadowColor={iconContainerHighlight}
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
