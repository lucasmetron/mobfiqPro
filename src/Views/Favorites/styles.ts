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
  text-transform: uppercase;
`;

export const containerProduct = styled.View`
  align-items: center;
  justify-content: center;
`;

export const cardProduct = styled.View`
  width: 95%;
  height: ${RFPercentage(15)}px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${color.interface.white};
`;

export const img = styled.Image`
  width: 70px;
  height: 100%;
  border-radius: 5px;
  background-color: ${color.interface.blue};
`;

export const boxInfos = styled.View`
  height: 100%;
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 10px;
`;

export const boxBtns = styled.View`
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const favoriteAndDeleteBtns = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const buyBtn = styled.TouchableOpacity`
  padding: 5px 15px;
  border-radius: 20px;
  border: 1px solid ${color.interface.blue1};
`;

export const textBuyBtn = styled.Text`
  font-size: ${RFPercentage(1)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.blue1};
  text-transform: uppercase;
`;

export const iconHeartSmall = styled.View`
  width: 25px;
  height: 25px;
  align-self: flex-end;
  border-radius: 12.5px;
  align-items: center;
  justify-content: center;
  background-color: ${color.interface.red};
`;

export const price = styled.Text`
  font-size: ${RFPercentage(1.5)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.blue1};
`;

export const title = styled.Text`
  font-size: ${RFPercentage(1.7)}px;
  font-family: ${fontsName.text};
  color: ${color.interface.darkgray};
`;
