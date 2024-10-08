import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Dimensions, Text } from "react-native";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  flex: 1;
  background-color: ${color.interface.white};
  align-items: center;
  justify-content: flex-start;
`;

export const header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: ${RFPercentage(1.1)}px;
`;

export const headerTxt = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${fontsName.text};
  color: ${color.interface.blue1};
`;

export const content = styled.ScrollView`
  width: 100%;
  flex: 1;
`;

export const carouselImgs = styled.View`
  position: relative;
  width: 100%;
  height: ${Dimensions.get("window").height * 0.5}px;
  background-color: ${color.interface.lightGray2};
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

export const btnToBuy = styled.TouchableOpacity`
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const price = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${color.interface.lightGray2};
`;

export const priceTxt = styled.Text`
  font-family: ${fontsName.text};
  font-size: ${RFPercentage(2)}px;
`;

export const btnToBuyTxt = styled.Text`
  width: 100%;
  color: ${color.interface.white};
  font-size: ${RFPercentage(2)}px;
  text-transform: uppercase;
  padding: 15px;
  text-align: center;
  background-color: ${color.interface.blue1};
`;

export const containerBalls = styled.View`
  position: absolute;
  bottom: 10;
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
  background-color: ${color.interface.blue1};
  opacity: ${(props) => (props.isActive ? 1 : 0.3)};
`;

export const nameProduct = styled.Text`
  width: 100%;
  font-size: ${RFPercentage(2.1)}px;
  padding: 10px;
  color: ${color.interface.darkgray};
`;
