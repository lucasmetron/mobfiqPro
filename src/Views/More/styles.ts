import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.ScrollView`
  flex: 1;

  padding-top: 10px;
`;

export const loadContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const title = styled.Text`
  width: 100%;
  color: ${color.interface.lightGray};
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.title};
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const boxOptions = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${color.interface.white};

  gap: 15px;
  align-items: center;
  justify-content: space-between;
`;

export const optionItem = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${color.interface.lightGray2};
`;

export const optionTextWithIcon = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  padding-left: 0;
`;

export const imgBox = styled.View`
  width: 15px;
  height: 15px;
  background-color: ${color.interface.blue1};
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 5px;
  margin-left: 15px;
`;

export const icon = styled.Image`
  width: 12px;
  height: 12px;
`;

export const optionText = styled.Text``;
