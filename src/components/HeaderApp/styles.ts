import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import { color } from "../../styles/pallete";

interface ContainerProps {
  isHome: boolean;
}

export const container = styled.View<ContainerProps>`
  background-color: ${color.interface.white};
  height: ${(props) =>
    props.isHome
      ? Dimensions.get("window").height * 0.08
      : Dimensions.get("window").height *
        (Platform.OS === "ios" ? 0.055 : 0.08)}px;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  padding-bottom: 5px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const line = styled.View`
  background-color: ${color.interface.lightGray2};
  width: 100%;
  height: 0.8px;
`;
