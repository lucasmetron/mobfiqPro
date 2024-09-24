import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { Dimensions } from "react-native";
// import { fontsName } from "styles/fonts";

interface teste {
  height: number;
}

export const container = styled.View<teste>`
  flex: 1;
  height: ${(props) => props.height}px;
  max-height: ${Dimensions.get("window").height * 0.7} px;
  gap: 8px;
`;

export const item = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const image = styled.Image`
  flex: 1;
  width: 100%;
`;

export const containerBalls = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
`;

interface BallProps {
  isActive: boolean;
}

export const ball = styled.View<BallProps>`
  width: ${RFPercentage(1)}px;
  height: ${RFPercentage(1)}px;
  border-radius: ${RFPercentage(0.5)}px;
  background-color: ${color.interface.backgroundColor};
  opacity: ${(props) => (props.isActive ? 1 : 0.3)};
`;
