import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  gap: 15px;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-top: 15px;
`;

export const info = styled.Text`
  width: 90%;
  text-align: justify;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  padding-top: 15px;
  color: ${color.interface.darkgray};
  font-size: ${RFPercentage(1.8)}px;

  font-family: ${fontsName.text};
`;

export const inputBox = styled.View`
  width: 90%;
  padding: 13px;
  background-color: ${color.interface.lightGray2};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const input = styled.TextInput`
  flex: 1;
  color: ${color.interface.darkgray};
`;

export const btn = styled.TouchableOpacity`
  width: 90%;
  padding: 13px;
  background-color: ${color.interface.blue1};
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const textBtn = styled.Text`
  width: 90%;
  color: ${color.interface.white};
  font-size: ${RFPercentage(1.7)}px;
  text-align: center;
  font-family: ${fontsName.text};
  text-transform: uppercase;
`;

export const notYetReciveTheCodeBox = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const notYetReciveTheCode = styled.Text`
  color: ${color.interface.darkgray};
  font-size: ${RFPercentage(1.7)}px;
  text-align: center;
  font-family: ${fontsName.text};
`;

export const notYetReciveTheCodeBtn = styled.Text`
  color: ${color.interface.blue1};
  font-size: ${RFPercentage(1.7)}px;
  text-align: center;
  font-family: ${fontsName.text};
`;
