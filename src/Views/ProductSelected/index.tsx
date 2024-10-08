import React, { useContext, useState } from "react";
import { Dimensions, Text } from "react-native";
import MaterialIconsfrom from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";

import * as S from "./styles";
import { color } from "styles/pallete";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductSelectedContext from "context/useProductSelected";
import { Images, ProductProps } from "types/ProductProps";
import { formatToBRL } from "utils/functions";

interface BannerProps {
  item: Images;
  index: number;
  animationValue: any;
}

export default function ProductSelected() {
  const width = Dimensions.get("window").width;
  const navigator = useNavigation();
  const { productSelected, setProductSelected } = useContext(
    ProductSelectedContext
  );
  const [indexPhoto, setIndexPhoto] = useState(0);

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
        <S.carouselImgs>
          <Carousel
            loop
            width={width}
            autoPlay={true}
            autoPlayInterval={5000}
            data={productSelected?.Skus[0].Images || []}
            scrollAnimationDuration={900}
            vertical={false}
            onSnapToItem={(index) => {
              setIndexPhoto(index);
            }}
            renderItem={({ item }: BannerProps) => (
              <S.item>
                <S.image source={{ uri: item.ImageUrl }} resizeMode="contain" />
              </S.item>
            )}
          />
          <S.containerBalls>
            {productSelected !== null &&
              productSelected.Skus[0].Images.map((_item: Images, i: number) => (
                <S.ball key={i} isActive={i === indexPhoto} />
              ))}
          </S.containerBalls>
        </S.carouselImgs>

        <S.nameProduct numberOfLines={2}>
          {productSelected?.Skus[0].Name || "Sem nome"}
        </S.nameProduct>
      </S.content>

      <S.btnToBuy>
        <S.line />
        <S.price>
          <S.priceTxt>Preço</S.priceTxt>
          <S.priceTxt>
            {formatToBRL(productSelected?.Skus[0].MeasurementPrice || 0)}
          </S.priceTxt>
        </S.price>
        <S.btnToBuyTxt>comprar</S.btnToBuyTxt>
      </S.btnToBuy>
    </S.container>
  );
}
