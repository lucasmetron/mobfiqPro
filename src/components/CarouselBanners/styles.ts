import styled from "styled-components/native";
// import { RFPercentage } from "react-native-responsive-fontsize";

// import { color } from "styles/pallete";
// import { fontsName } from "styles/fonts";

interface teste {
  height: number;
}

export const container = styled.View<teste>`
  flex: 1;
  height: ${(props) => props.height}px;
`;

export const item = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const image = styled.Image`
  flex: 1;
  width: 100%;
`;
