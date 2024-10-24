import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  flex: 1;
`;

export const noProducts = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 10rem;
`;

export const iconHeart = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${color.interface.red};
`;

export const textNoItens = styled.Text`
  font-size: ${RFPercentage(2.5)}px;
  text-align: center;
  font-family: ${fontsName.title};
  color: ${color.interface.lightGray};
`;

export const btnToHome = styled.TouchableOpacity`
  width: 90%;
  border: 2px solid ${color.interface.darkgray};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-top: 20px;
`;

export const textBtn = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.darkgray};
`;
