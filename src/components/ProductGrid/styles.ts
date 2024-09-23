import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  background-color: ${color.interface.white};
  width: 100%;
`;

export const boxCard = styled.View`
  width: ${Dimensions.get("window").width * 0.5}px;
  height: ${Dimensions.get("window").height * 0.65}px;
`;

export const line = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${color.interface.backgroundColor};
`;

export const title = styled.Text`
  font-size: ${RFPercentage(2.5)}px;
  font-weight: ${fontsName.title};
  text-align: center;
  font-weight: bold;
  color: ${color.interface.backgroundColor2};
`;

export const loadContainer = styled.View`
  width: 100%;
  height: ${Dimensions.get("window").height * 0.65}px;
  align-items: center;
  justify-content: center;
`;
