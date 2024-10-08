import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Dimensions, Text } from "react-native";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  flex: 1;
  background-color: ${color.interface.white};
  align-items: center;
  justify-content: flex-start;
`;

export const header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: ${RFPercentage(1.1)}px;
`;

export const headerTxt = styled.Text`
  flex: 1;
  text-align: center;
`;

export const content = styled.ScrollView`
  width: 100%;
  flex: 1;
`;

export const carouselImgs = styled.View`
  width: 100%;
  height: ${Dimensions.get("window").height * 0.5};
  background-color: palegoldenrod;
`;

export const btnToBuy = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${color.interface.blue1};
`;

export const btnToBuyTxt = styled.Text`
  color: ${color.interface.white};
  font-size: ${RFPercentage(2)}px;
  text-transform: uppercase;
`;
