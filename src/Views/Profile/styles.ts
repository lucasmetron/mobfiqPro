import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
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
`;

export const btnOutline = styled.TouchableOpacity`
  width: 90%;
  padding: 13px;
  background-color: ${color.interface.white};
  border: 1px solid ${color.interface.blue1};
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const textBtnOutline = styled.Text`
  width: 90%;
  color: ${color.interface.blue1};
  font-size: ${RFPercentage(1.7)}px;
  text-align: center;
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

export const boxforgotPassword = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const btnNoBackground = styled.TouchableHighlight`
  width: 100%;
  gap: 5px;
`;

interface TextForgotPasswordProps {
  color: string;
}

export const textForgotPassword = styled.Text<TextForgotPasswordProps>`
  color: ${(props) => props.color};
  font-size: ${RFPercentage(1.7)}px;
  text-align: center;
  font-family: ${fontsName.title};
`;

export const notYetRegisterText = styled.Text`
  color: ${color.interface.darkgray};
  font-size: ${RFPercentage(1.7)}px;
  text-align: center;
  font-family: ${fontsName.text};
`;
