import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RFPercentage } from "react-native-responsive-fontsize";

import * as S from "./styles";
import { ProductProps, SkusProps } from "types/ProductProps";
import { color } from "styles/pallete";

interface CardProductProps {
  product: ProductProps;
}

export default function CardProduct({ product }: CardProductProps) {
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

  //toda vez que o item mudar eu ordeno a lista pelo order (por que vem desordenado) e salvo o primeiro item da lista já ordenada com Sellers.Quantity > 0
  useEffect(() => {
    if (product) {
      orderSkusByOrderAndSellers(product.Skus);
    }
  }, [product]);

  return (
    <S.container>
      {firstSkuByrOrderAndSellers !== null &&
      firstSkuByrOrderAndSellers !== undefined ? (
        <S.img
          source={{
            uri:
              firstSkuByrOrderAndSellers !== null
                ? firstSkuByrOrderAndSellers?.Images[0].ImageUrl
                : product.Skus[0].Images[0].ImageUrl,
          }}
        >
          <S.likeBox>
            <AntDesign
              size={RFPercentage(1.8)}
              color={color.interface.black}
              name="hearto"
            />
          </S.likeBox>
        </S.img>
      ) : (
        <>
          <AntDesign name="user" size={30} color={"red"} />
          <Text>teste</Text>
        </>
      )}
      <S.infos>
        <Text> teste</Text>
      </S.infos>
    </S.container>
  );
}
