import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  position: relative;
  gap: 15px;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-top: 15px;
`;

export const title = styled.Text`
  width: 90%;
  font-size: ${RFPercentage(1.8)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.darkgray};
  text-transform: uppercase;
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

interface ConfirmBtnProps {
  color: string;
}

export const confirmBtn = styled.TouchableOpacity<ConfirmBtnProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 13px;
  background-color: ${(props) => props.color};
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

export const textGen = styled.Text`
  color: ${color.interface.darkgray};
  font-size: ${RFPercentage(1.7)}px;
  text-align: left;
  font-family: ${fontsName.text};
`;

export const genBox = styled.View`
  width: 90%;
  padding: 13px;
  background-color: ${color.interface.lightGray2};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const optionsGen = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface TextOptionsProps {
  selected: boolean;
}

export const textOptions = styled.Text<TextOptionsProps>`
  color: ${(props) =>
    props.selected ? color.system.success : color.interface.darkgray};
  font-size: ${RFPercentage(1.7)}px;
  font-family: ${fontsName.text};
  text-transform: uppercase;
`;
