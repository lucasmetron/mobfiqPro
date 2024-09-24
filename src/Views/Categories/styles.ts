import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";
import { Dimensions } from "react-native";

export const container = styled.ScrollView`
  flex: 1;
  padding: 10px;
`;

export const loadContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const itemCategorie = styled.TouchableOpacity`
  flex: 1;
  height: ${Dimensions.get("window").height * 0.2}px;
  align-items: center;
  justify-content: center;
  background-color: ${color.interface.white};
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  gap: 10px;
`;

export const icon = styled.Text`
  font-family: ${fontsName.iconMobfiqFont};
  font-size: ${RFPercentage(7)}px;
  color: ${color.interface.blue1};
`;

export const title = styled.Text`
  font-family: ${fontsName.text};
`;
