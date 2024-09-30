import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  background-color: ${color.interface.lightGray2};
  flex-direction: row;
  flex: 1;
  border-radius: 5px;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  gap: 10px;
`;

export const textSearch = styled.TextInput`
  color: ${color.interface.darkgray};
  font-family: ${fontsName.text};
`;
