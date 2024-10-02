import React from "react";
import MaterialIconsfrom from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { color } from "styles/pallete";
import SearchProductHome from "components/SearchProductHome";

export default function HeaderSearch() {
  const navigator = useNavigation();

  return (
    <S.container>
      <S.btnGoBack
        onPress={() => {
          navigator.goBack();
        }}
      >
        <MaterialIconsfrom
          name="arrow-back-ios"
          color={color.interface.blue1}
          size={RFPercentage(2.5)}
        />
      </S.btnGoBack>

      <SearchProductHome />

      <AntDesign
        name="barcode"
        color={color.interface.blue1}
        size={RFPercentage(2.5)}
      />
    </S.container>
  );
}
