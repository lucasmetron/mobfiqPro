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

export const product = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
`;

export const image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  background-color: ${color.interface.lightGray2};
`;

export const name = styled.Text`
  flex: 1;
  text-align: left;
  font-family: ${fontsName.text};
  font-size: ${RFPercentage(1.5)}px;
  color: ${color.interface.darkgray};
`;

export const price = styled.Text`
  text-align: center;
  font-family: ${fontsName.text};
  font-size: ${RFPercentage(1.5)}px;
  color: ${color.interface.blue1};
`;

export const noProducts = styled.View``;
