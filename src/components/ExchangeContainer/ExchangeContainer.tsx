import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";

import styled from "styled-components/native";

interface ExchangeContainerProps {
  title: string;
}

const { width, height } = Dimensions.get("window");

const StyledExchangeContainer = styled.View`
  height: ${height / 0.2};
  width: ${width - 30};

  border-radius: 30px;
  background-color: #f8f0fe;
  box-shadow: 4px 5px 0.5px ${(props) => props.theme.lightPurple};
`;

const LendTitle = styled.Text`
  color: ${(props) => props.theme.main};
  font-size: 22px;
  font-family: "Rubik_500Medium";
  margin-top: 30px;
  margin-left: 30px;
`;

const AmountAndCoinContainer = styled.View`
  /* border: 1px solid white; */
  margin: 20px;
  height: 75px;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
`;

const AmountText = styled.Text`
  color: ${(props) => props.theme.main};
  opacity: 0.5;
  font-size: 42px;
`;

const CoinContainer = styled.Pressable`
  border: 1px solid black;
  flex-direction: row;
`;

export const ExchangeContainer = (props: ExchangeContainerProps) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  return (
    <Provider>
      <StyledExchangeContainer>
        <LendTitle>You Lend</LendTitle>
        <AmountAndCoinContainer>
          <AmountText>4.237</AmountText>
          <CoinContainer onPress={showModal}>
            <Text>Logo</Text>
            <Text>Title</Text>
            <Text>Dropdown</Text>
          </CoinContainer>
        </AmountAndCoinContainer>
      </StyledExchangeContainer>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
    </Provider>
  );
};
