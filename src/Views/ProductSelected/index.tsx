import React, { useContext } from "react";
import { Text } from "react-native";
import MaterialIconsfrom from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { color } from "styles/pallete";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductSelectedContext from "context/useProductSelected";

export default function ProductSelected() {
  const navigator = useNavigation();
  const { productSelected, setProductSelected } = useContext(
    ProductSelectedContext
  );
  console.log("productSelected: ", productSelected);

  return (
    <S.container>
      <S.header>
        <TouchableOpacity
          onPress={() => {
            navigator.goBack();
            setProductSelected(null);
          }}
        >
          <MaterialIconsfrom
            name="arrow-back-ios"
            color={color.interface.blue1}
            size={RFPercentage(2.5)}
          />
        </TouchableOpacity>

        <S.headerTxt numberOfLines={1}>
          {productSelected?.Name || "Sem nome"}
        </S.headerTxt>

        <Fontisto
          name="zoom"
          color={color.interface.blue1}
          size={RFPercentage(2.5)}
        />
      </S.header>

      <S.content>
        <S.carouselImgs></S.carouselImgs>
      </S.content>

      <S.btnToBuy>
        <S.btnToBuyTxt>comprar</S.btnToBuyTxt>
      </S.btnToBuy>
    </S.container>
  );
}
