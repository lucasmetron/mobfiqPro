import React, { useContext, useState, useCallback } from "react";
import { Dimensions } from "react-native";
import MaterialIconsfrom from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
import Toast from "react-native-toast-message";

import * as S from "./styles";
import { color } from "styles/pallete";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductSelectedContext from "context/useProductSelected";
import { Images } from "types/ProductProps";
import { formatToBRL } from "utils/functions";
import useCartContext from "context/useCartContext";
import { ProductProps } from "types/ProductProps";
import { appsFlyerEvents } from "components/AppsFlyer/actions";
import {
  registerEvent,
  returnProductObjToEvent,
} from "components/AppsFlyer/functions";
import appsFlyer from "react-native-appsflyer";
import { stacksMain } from "Router/routes";
import Load from "components/Load";
import { getProductByDeepLink } from "./reqs";

interface BannerProps {
  item: Images;
  index: number;
  animationValue: any;
}

interface ProductSelectedProps {
  route?: {
    params: {
      productId: string;
    };
  };
}

export default function ProductSelected({ route }: ProductSelectedProps) {
  const { setProductsInCart, productsInCart } = useContext(useCartContext);
  const width = Dimensions.get("window").width;
  const navigator: any = useNavigation();
  const { productSelected, setProductSelected } = useContext(
    ProductSelectedContext
  );

  const [indexPhoto, setIndexPhoto] = useState(0);
  const [isReq, setIsReq] = useState(false);

  function addProductOnCart(productToAdd: ProductProps) {
    let productAlreadyInTheList = false;

    if (productsInCart.length > 0) {
      productsInCart.forEach((product) => {
        if (product.Id === productToAdd.Id) {
          productAlreadyInTheList = true;
        }
      });
    }

    if (productAlreadyInTheList) {
      Toast.show({
        type: "info",
        text1: "Atenção",
        text2: "Produto já existe no carrinho",
      });
    } else {
      setProductsInCart((obj) => [...obj, productToAdd]);
      registerEvent(
        appsFlyerEvents.addInCart,
        returnProductObjToEvent(productToAdd)
      );
      Toast.show({
        type: "success",
        text1: "Sucesso!",
        text2: "Produto adicionado ao carrinho.",
      });
    }
  }

  //obeservar se o item vira de um deeplink
  useFocusEffect(
    useCallback(() => {
      const unsubscribe = navigator.addListener("blur", () => {
        // Limpa os parâmetros da rota ao perder o foco
        navigator.setParams(undefined);
      });

      if (productSelected === null) {
        if (route?.params?.productId && route?.params?.productId !== "") {
          (async () => {
            await getProductByDeepLink(
              route?.params?.productId,
              setProductSelected,
              setIsReq,
              navigator
            );
          })();
        } else {
          setTimeout(() => {
            navigator.navigate(stacksMain.tabs);
          }, 100);
        }
      }

      return () => {
        unsubscribe();
      };
    }, [productSelected, route?.params?.productId, navigator])
  );

  return (
    <S.container>
      {isReq ? (
        <S.centralize>
          <Load />
        </S.centralize>
      ) : (
        <>
          <S.header>
            <TouchableOpacity
              onPress={() => {
                navigator.navigate(stacksMain.tabs);
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
                    <S.image
                      source={{ uri: item.ImageUrl }}
                      resizeMode="contain"
                    />
                  </S.item>
                )}
              />
              <S.containerBalls>
                {productSelected !== null &&
                  productSelected.Skus[0].Images.map(
                    (_item: Images, i: number) => (
                      <S.ball key={i} isActive={i === indexPhoto} />
                    )
                  )}
              </S.containerBalls>
            </S.carouselImgs>

            <S.nameProduct numberOfLines={2}>
              {productSelected?.Skus[0].Name || "Sem nome"}
            </S.nameProduct>
          </S.content>

          <S.btnToBuy
            onPress={() => {
              if (productSelected !== null) {
                addProductOnCart(productSelected);
              }
            }}
          >
            <S.line />
            <S.price>
              <S.priceTxt>Preço</S.priceTxt>
              <S.priceTxt>
                {formatToBRL(productSelected?.Skus[0].MeasurementPrice || 0)}
              </S.priceTxt>
            </S.price>

            <S.btnToBuyTxt>comprar</S.btnToBuyTxt>
          </S.btnToBuy>
        </>
      )}
    </S.container>
  );
}
