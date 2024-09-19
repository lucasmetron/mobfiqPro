import styled from "styled-components/native";
// import { RFPercentage } from "react-native-responsive-fontsize";

// import { color } from "styles/pallete";
// import { fontsName } from "styles/fonts";

interface ContainerProps {
  height: number;
}

export const container = styled.View<ContainerProps>`
  width: 100%;
  height: ${(props) => props.height}px;
  flex-direction: row;
  gap: 10px;
`;
interface ImgProps {
  width: number;
}

export const img = styled.Image<ImgProps>`
  flex: ${(props) => props.width};
  width: 100%;
  height: 100%;
`;
