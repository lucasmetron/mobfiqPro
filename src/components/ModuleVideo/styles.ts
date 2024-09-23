import { Dimensions } from "react-native";
import styled from "styled-components/native";
// import { RFPercentage } from "react-native-responsive-fontsize";

// import { color } from "styles/pallete";
// import { fontsName } from "styles/fonts";

export const container = styled.View`
  width: 100%;
  height: ${Dimensions.get("window").height * 0.3}px;
`;
