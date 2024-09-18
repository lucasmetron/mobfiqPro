import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import { color } from "../../styles/pallete";

export const container = styled.View`
  background-color: ${color.interface.backgroundColor};
  height: ${Dimensions.get("window").height *
  (Platform.OS === "ios" ? 0.055 : 0.08)}px;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  padding-bottom: 5px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;
