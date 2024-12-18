import React, { useState, useEffect, useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import * as S from "./styles";
import { ProductProps, SkusProps } from "types/ProductProps";
import { color } from "styles/pallete";
import ProductSelectedContext from "context/useProductSelected";
import useFavoritesContext from "context/useFavoritesContext";
import { stacksMain } from "Router/routes";
import useCartContext from "context/useCartContext";
import { appsFlyerEvents } from "components/AppsFlyer/actions";
import {
  registerEvent,
  returnProductObjToEvent,
} from "components/AppsFlyer/functions";

interface CardProductProps {
  item: ProductProps;
}

export default function CardProduct({ item }: CardProductProps) {
  const { setProductsInCart, productsInCart } = useContext(useCartContext);
  const navigation: any = useNavigation();
  const { setProductSelected } = useContext(ProductSelectedContext);
  const { setFavorites, favorites } = useContext(useFavoritesContext);
  const hideQuota = false;
  const [listSkusOrder, setListSkusOrder] = useState<SkusProps[]>();
  const [firstSkuByrOrderAndSellers, setFirstSkuByrOrderAndSellers] =
    useState<SkusProps | null>();

  //toda vez que o item mudar eu ordeno a lista pelo order (por que vem desordenado) e salvo o primeiro item da lista já ordenada com Sellers.Quantity > 0
  function orderSkusByOrderAndSellers(skus: SkusProps[]) {
    let newSkusList: SkusProps[] = [];
    let productSelected: SkusProps | null = null;

    if (
      skus !== null &&
      skus !== null &&
      skus !== undefined &&
      skus.length > 0
    ) {
      const productOrdenedCopy = skus;

      if (productOrdenedCopy.length > 1) {
        productOrdenedCopy.sort(function (a: any, b: any) {
          if (a.Order > b.Order) {
            return 1;
          }
          if (a.Order < b.Order) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      }
      setListSkusOrder(productOrdenedCopy);
      newSkusList = productOrdenedCopy;
    }

    if (newSkusList.length > 0) {
      let index = 0;

      while (index <= newSkusList.length && productSelected === null) {
        if (newSkusList[index]?.Sellers[0]?.Quantity > 0) {
          setFirstSkuByrOrderAndSellers(newSkusList[index]);
          productSelected = newSkusList[index];
          index = index + 1;
          return;
        } else {
          index = index + 1;
        }
      }
    }

    //só pra garantir que terá algum produto caso a função acima não consiga encontrar produtos
    if (productSelected === null && newSkusList[0]) {
      setFirstSkuByrOrderAndSellers(newSkusList[0]);
    }
  }

  //Faz algumas verificações para retornar preço atual, preço antigo e parcelamento
  function returnPrice(product: ProductProps, skusOrdened: SkusProps[]) {
    const productOrdenedCopy = { ...product };
    productOrdenedCopy.Skus = skusOrdened;
    if (
      product.Skus !== null &&
      product.Skus !== null &&
      product.Skus !== undefined &&
      product.Skus.length > 0
    ) {
      let index = 0;
      let productSelected: SkusProps | null = null;

      while (
        productSelected === null &&
        index <= productOrdenedCopy.Skus.length
      ) {
        if (
          productOrdenedCopy?.Skus[index]?.Sellers[0]?.Price !== 0 &&
          productOrdenedCopy?.Skus[index]?.Sellers[0]?.Quantity !== 0
        ) {
          productSelected = productOrdenedCopy.Skus[index];
        }
        index += 1;
      }

      if (productSelected !== null && productSelected !== undefined) {
        const oldPrice =
          productSelected?.Sellers[0]?.ListPrice >
          productSelected?.Sellers[0]?.Price ? (
            <Text>
              {`Preço antigo: R$ ${
                productSelected?.Sellers[0]?.ListPrice.toFixed(2).replace(
                  ".",
                  ","
                ) || 0
              }`}
            </Text>
          ) : null;

        const price = (
          <Text>
            {`R$${
              productSelected?.Sellers[0]?.Price.toFixed(2).replace(".", ",") ||
              0
            }`}
          </Text>
        );

        const quota =
          productSelected?.Sellers[0]?.BestInstallment?.Count > 1 &&
          hideQuota === false ? (
            <Text>{`Ou em ${
              productSelected?.Sellers[0]?.BestInstallment.Count
            }x de R$${
              productSelected?.Sellers[0]?.BestInstallment?.Value.toFixed(
                2
              ).replace(".", ",") || 0
            }`}</Text>
          ) : null;

        return (
          <>
            {oldPrice !== null && <Text>{oldPrice}</Text>}
            <S.price>{price}</S.price>
            {quota !== null && <Text>{quota}</Text>}
          </>
        );
      } else {
        return (
          <View>
            <S.productUnvaliable> Produto indisponível</S.productUnvaliable>
          </View>
        );
      }
    } else {
      return <S.productUnvaliable> Produto indisponível</S.productUnvaliable>;
    }
  }

  function addProductInFavoriteList() {
    let canAdd = true;

    if (favorites.length > 0) {
      favorites.forEach((i) => {
        if (i.Id === item.Id) {
          canAdd = false;
        }
      });
    }

    if (canAdd) {
      setFavorites((favorites) => [...favorites, item]);
    }
  }

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

  //toda vez que o item mudar eu ordeno a lista pelo order (por que vem desordenado) e salvo o primeiro item da lista já ordenada com Sellers.Quantity > 0
  useEffect(() => {
    if (item.Skus.length > 0) {
      orderSkusByOrderAndSellers(item.Skus);
    }
  }, [item]);

  return (
    <TouchableOpacity
      onPress={() => {
        setProductSelected(item);
        navigation.navigate(stacksMain.productSelected);
        registerEvent(
          appsFlyerEvents.openProdutct,
          returnProductObjToEvent(item)
        );
      }}
    >
      <S.container>
        {firstSkuByrOrderAndSellers !== null &&
        firstSkuByrOrderAndSellers !== undefined ? (
          <S.img
            source={{
              uri:
                firstSkuByrOrderAndSellers !== null
                  ? firstSkuByrOrderAndSellers?.Images[0].ImageUrl
                  : item.Skus[0].Images[0].ImageUrl,
            }}
          >
            <S.likeBox>
              <AntDesign
                onPress={addProductInFavoriteList}
                size={RFPercentage(1.8)}
                color={color.interface.black}
                name="hearto"
              />
            </S.likeBox>
          </S.img>
        ) : (
          <S.noImage>
            <Entypo name="image" size={30} color={color.interface.darkgray} />
          </S.noImage>
        )}
        <S.infos>
          <S.infos>
            {item?.Brand && item?.Brand !== "" && (
              <S.titleProductBrand numberOfLines={2}>
                {item?.Brand || "sem brand"}
              </S.titleProductBrand>
            )}

            <S.subTitleProduct numberOfLines={2}>
              {item?.Name}
            </S.subTitleProduct>

            {returnPrice(
              item,
              listSkusOrder !== undefined ? listSkusOrder : []
            )}
          </S.infos>

          <S.boxBtn>
            <S.buyBtn onPress={() => addProductOnCart(item)}>
              <S.textBtn>COMPRAR</S.textBtn>
            </S.buyBtn>
          </S.boxBtn>
        </S.infos>
      </S.container>
    </TouchableOpacity>
  );
}
