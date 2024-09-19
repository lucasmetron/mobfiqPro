import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  width: 100%;
  gap: ${RFPercentage(0.5)}px;
  background-color: ${color.interface.white};
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

export const boxCategories = styled.ScrollView`
  padding: 10px 5px;
  padding-bottom: 15px;
`;

export const itemCategorie = styled.View`
  width: ${RFPercentage(10)}px;
  height: ${RFPercentage(10)}px;
  border-color: ${color.interface.backgroundColor};
  border-width: 1px;
  border-radius: ${RFPercentage(5)}px;
  align-items: center;
  justify-content: center;
`;

export const icon = styled.Text`
  text-align: center;
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.iconMobfiqFont};
`;
