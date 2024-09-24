import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  background-color: ${color.interface.white};
  width: 100%;
  max-height: ${Dimensions.get("window").height * 0.5}px;
`;

export const title = styled.Text`
  text-align: center;
  font-family: ${fontsName.title};
  font-size: ${RFPercentage(2.5)}px;
  color: ${color.interface.darkgray};
  padding-top: ${RFPercentage(2)}px;
`;

export const line = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${color.interface.backgroundColor};
`;

interface CarouselConteinerProps {
  height: number;
}

export const carouselConteiner = styled.ScrollView<CarouselConteinerProps>`
  width: 100%;
  height: ${(props) => props.height}px;

  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const itemCarousel = styled.View`
  width: ${Dimensions.get("window").width * 0.45}px;
  height: 100%;
`;

export const img = styled.Image`
  width: 100%;
  height: 100%;
`;
