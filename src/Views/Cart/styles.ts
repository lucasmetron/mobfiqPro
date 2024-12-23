import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";
import { Dimensions } from "react-native";

export const container = styled.View`
  flex: 1;
`;

export const cartScroll = styled.ScrollView`
  flex: 1;
  padding: ${RFPercentage(1)}px;
`;

export const boxFinishBuy = styled.View`
  align-items: center;
  padding-top: 10px;
  gap: 10px;
  justify-content: space-between;
  background-color: ${color.interface.white};
`;

export const nameProduct = styled.Text`
  font-family: ${fontsName.title};
  font-size: ${RFPercentage(1.8)}px;
  color: ${color.interface.darkgray};
`;

export const loadBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const item = styled.View<{ $heightScreen: number }>`
  width: 100%;
  height: ${(props) => `${props.$heightScreen * 0.2}px`};
  background-color: ${color.interface.white};
  padding: ${RFPercentage(2)}px;
  display: flex;
  justify-content: space-between;
  gap: ${RFPercentage(2)}px;
  border-radius: 5px;
`;

export const boxPhotoAndTitleProdutc = styled.View`
  flex-direction: row;
  flex: 1;
  gap: 10px;
  justify-content: space-between;
`;

export const imgProduct = styled.Image`
  flex: 2.5;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  height: ${Dimensions.get("window").height * 0.1}px;
  background-color: ${color.interface.lightGray2};
`;

export const boxTitleAndSubTitle = styled.View`
  flex: 8;
`;

export const qtdAndPrice = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const deleteBox = styled.TouchableOpacity`
  padding: 5px;
`;

export const qtdBox = styled.View`
  display: none;
  min-width: 35%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px 15px;
`;

export const btn = styled.TouchableOpacity`
  flex: 1;
`;

export const whiteBox = styled.View`
  gap: 10px;
  background-color: ${color.interface.white};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const titleInput = styled.Text`
  width: 100%;
  text-align: left;
  font-family: ${fontsName.title};
`;

export const inputBox = styled.View`
  width: 100%;
  padding: 13px;
  background-color: ${color.interface.lightGray4};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const input = styled.TextInput`
  flex: 1;
  color: ${color.interface.darkgray};
`;

export const noProducts = styled.View`
  flex: 1;
  padding: ${RFPercentage(2)}px;
  align-items: center;
  justify-content: center;
  background-color: ${color.interface.white};
`;

export const infosBuy = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;

export const textInfosBuy = styled.Text`
  color: ${color.interface.darkgray};
  font-family: ${fontsName.text};
  font-size: ${RFPercentage(1.8)}px;
`;

export const btnBuy = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${color.interface.darkgray};
`;

export const textBtnBuy = styled.Text`
  color: ${color.interface.white};
  font-family: ${fontsName.title};
  font-size: ${RFPercentage(1.7)}px;
  text-transform: uppercase;
`;
