import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const text = styled.Text`
  font-size: ${RFPercentage(1.5)}px;
  color: ${color.interface.darkgray};
  font-family: ${fontsName.text};
`;
