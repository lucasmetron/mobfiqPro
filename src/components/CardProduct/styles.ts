import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  width: ${Dimensions.get("window").width * 0.4}px;
  height: 100%;
`;

export const img = styled.ImageBackground`
  flex: 5.5;
  width: 100%;
  height: 100%;
  align-items: flex-end;
`;

export const noImage = styled.View`
  flex: 5;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${color.interface.lightGray2};
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
  gap: 5px;
  padding: 0px 2px;
`;

export const titleProductBrand = styled.Text`
  padding-top: 10px;
  font-family: ${fontsName.title};
  font-size: ${RFPercentage(1.6)}px;
`;

export const subTitleProduct = styled.Text`
  font-family: ${fontsName.text};
  font-size: ${RFPercentage(1.5)}px;
`;

export const productUnvaliable = styled.Text`
  font-family: ${fontsName.title};
  font-size: ${RFPercentage(1.5)}px;
`;

export const boxBtn = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
`;

export const buyBtn = styled.TouchableOpacity`
  width: 90%;
  border-radius: 20px;
  padding: 8px;
  background-color: ${color.interface.backgroundColor};
  align-items: center;
  justify-content: center;
`;

export const textBtn = styled.Text`
  text-align: center;
  font-size: ${RFPercentage(1.8)}px;
  color: ${color.interface.white};
  text-transform: uppercase;
`;

export const price = styled.Text`
  font-size: ${RFPercentage(1.6)}px;
  color: ${color.auxiliary.coral};
`;

export const seeMoreBox = styled.View`
  font-size: ${RFPercentage(1.6)}px;
  color: ${color.auxiliary.coral};
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const seeMoreBtn = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 8px;
  background-color: ${color.interface.backgroundColor};
  align-items: center;
  justify-content: center;
`;
