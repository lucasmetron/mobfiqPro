import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";
import { Dimensions } from "react-native";

export const container = styled.ScrollView`
  flex: 1;
  padding: ${RFPercentage(1)}px;
`;

export const loadBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const item = styled.View`
  width: 100%;
  min-height: fit-content;
  background-color: ${color.interface.white};
  padding: ${RFPercentage(2)}px;
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

export const qtdBox = styled.View`
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
  padding: ${RFPercentage(2)}px;
  align-items: center;
  justify-content: center;
  background-color: ${color.interface.white};
`;
