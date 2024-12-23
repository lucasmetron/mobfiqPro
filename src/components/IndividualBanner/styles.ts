import styled from "styled-components/native";
// import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
// import { fontsName } from "styles/fonts";

interface ContainerProps {
  height: number;
}

export const container = styled.View<ContainerProps>`
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: red;
`;

export const img = styled.Image`
  width: 100%;
  height: 100%;
  background-color: ${color.interface.backgroundColor};
`;
