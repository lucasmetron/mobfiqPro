import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  width: ${Dimensions.get("window").width * 0.4}px;
  height: 100%;
  background-color: red;
`;

export const img = styled.ImageBackground`
  flex: 5;
  width: 100%;
  align-items: flex-end;
`;

export const likeBox = styled.View`
  align-items: center;
  justify-content: center;
  width: ${RFPercentage(3.5)}px;
  height: ${RFPercentage(3.5)}px;
  border-radius: ${RFPercentage(1.75)}px;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 10px;
`;

export const infos = styled.View`
  flex: 5;
  width: 100%;
`;
