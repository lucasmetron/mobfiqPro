import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
// import { fontsName } from "styles/fonts";

export const container = styled.ScrollView`
  height: 100%;
  width: 100%;
  flex: 1;
  gap: 5px;
  background-color: ${color.interface.lightGray4};
`;

export const noDataHome = styled.View`
  flex: 1;
  height: ${Dimensions.get("window").height * 0.75}px;
  align-items: center;
  justify-content: center;
`;

export const noDataHomeText = styled.Text`
  font-size: ${RFPercentage(2)}px;
  color: ${color.interface.backgroundColor};
`;
