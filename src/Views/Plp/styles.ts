import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.ScrollView`
  flex: 1;
`;

export const loadBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const boxCard = styled.View`
  height: ${Dimensions.get("window").height * 0.65}px;
  background-color: ${color.interface.white};
  flex: 1;
  margin: 5px;
`;

export const boxInfo = styled.View`
  background-color: ${color.interface.white};
  flex: 1;
  padding: 10px 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const titleBox = styled.View`
  background-color: ${color.interface.white};
  flex: 1;
  gap: 5px;
`;

export const textInfo = styled.Text`
  color: ${color.interface.darkgray};
  font-family: ${fontsName.text};
  font-size: ${RFPercentage(1.5)}px;
`;

export const qtdProducts = styled.View`
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
