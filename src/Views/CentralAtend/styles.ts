import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.ScrollView`
  flex: 1;
`;

export const dataBox = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

export const titleData = styled.Text`
  font-family: ${fontsName.title};
  font-size: ${RFPercentage(2.1)}px;
  color: ${color.interface.darkgray3};
  padding: 10px 10px 0 10px;
`;

export const box = styled.View`
  width: 100%;
  padding: 10px 20px;
  background-color: ${color.interface.white};
  gap: 3px;
`;

export const line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${color.interface.lightGray2};
`;

export const infos = styled.View`
  width: 100%;
`;

export const titleInfos = styled.Text`
  font-family: ${fontsName.title};
  font-size: ${RFPercentage(2)}px;
  color: ${color.interface.darkgray};
`;

export const textInfos = styled.Text`
  font-family: ${fontsName.text};
  font-size: ${RFPercentage(1.8)}px;
  color: ${color.interface.lightGray};
`;
