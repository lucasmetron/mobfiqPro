import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${color.interface.white};
  padding: ${RFPercentage(2)}px;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const icon = styled.Text`
  color: ${color.interface.red};
  font-size: ${RFPercentage(1.8)}px;
  font-family: ${fontsName.iconMobfiqFont};
`;

export const text = styled.Text`
  color: ${color.interface.lightGray};
  font-size: ${RFPercentage(1.9)}px;
`;

export const box = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
