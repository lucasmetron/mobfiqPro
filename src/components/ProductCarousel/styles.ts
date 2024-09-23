import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  background-color: ${color.interface.white};
  width: 100%;
  height: ${Dimensions.get("window").height * 0.65}px;
`;

export const line = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${color.interface.backgroundColor};
`;

export const loadContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const containerProducts = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
`;

export const title = styled.Text`
  text-align: center;
  font-family: ${fontsName.title};
  font-size: ${RFPercentage(2.5)}px;
  color: ${color.interface.darkgray};
  padding-top: ${RFPercentage(2)}px;
`;

export const carouselConteiner = styled.ScrollView`
  width: 100%;
  flex-direction: row;
  background-color: aliceblue;
`;
