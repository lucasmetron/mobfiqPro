import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  flex: 1;
  height: 100%;
  gap: 4px;
`;

export const titleStore = styled.Text`
  font-family: ${fontsName.title};
  text-align: center;
  font-size: ${RFPercentage(1.8)}px;
  text-transform: uppercase;
  color: ${color.interface.blue1};
`;

export const boxSearch = styled.View`
  background-color: ${color.interface.lightGray2};
  flex-direction: row;
  flex: 1;
  border-radius: 5px;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  gap: 10px;
`;

export const textSearch = styled.Text`
  color: ${color.interface.darkgray};
`;
