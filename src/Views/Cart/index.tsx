import React, { useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import * as S from "./styles";
import { getProduct } from "./reqs";
import { ProductProps } from "types/ProductProps";
import Load from "components/Load";
import { formatToBRL } from "utils/functions";
import { color } from "styles/pallete";
import useCartContext from "context/useCartContext";

export default function Cart() {
  const { height } = Dimensions.get("window");
  const { productsInCart, setProductsInCart } = useContext(useCartContext);
  const [isLoad, setIsLoad] = useState(false);

  function returnTotalPrice(products: ProductProps[]) {
    let totalPrice = 0;

    products.forEach((item) => {
      totalPrice = totalPrice + item.Skus[0].MeasurementPrice || 0;
    });

    return formatToBRL(totalPrice);
  }

  function deleteProductFromCard(productToDelete: ProductProps) {
    const newList = productsInCart.filter(
      (product) => product.Id !== productToDelete.Id
    );
    setProductsInCart(newList);
  }

  useEffect(() => {
    setIsLoad(false);
    // (async () => {
    //   setIsLoad(true);
    //   const newProducts = await getProduct();
    //   if (newProducts.length > 0) {
    //     setProductsInCart(newProducts);
    //   }
    //   setIsLoad(false);
    // })();
  }, []);

  return isLoad ? (
    <S.loadBox>
      <Load text="Carregando produtos..." />
    </S.loadBox>
  ) : (
    <S.container>
      {productsInCart.length > 0 ? (
        <>
          <S.cartScroll contentContainerStyle={{ gap: 10 }}>
            {productsInCart.map((item) => (
              <S.item key={item.Id} $heightScreen={height}>
                <S.boxPhotoAndTitleProdutc>
                  <S.imgProduct
                    resizeMode="stretch"
                    source={{ uri: item.Skus[0]?.Images[0]?.ImageUrl }}
                  />
                  <S.boxTitleAndSubTitle>
                    <S.nameProduct numberOfLines={2}>{item.Name}</S.nameProduct>
                  </S.boxTitleAndSubTitle>
                </S.boxPhotoAndTitleProdutc>

                <S.qtdAndPrice>
                  <S.deleteBox
                    onPress={() => {
                      deleteProductFromCard(item);
                    }}
                  >
                    <MaterialCommunityIcons
                      name="delete"
                      size={25}
                      color={color.interface.red}
                    />
                  </S.deleteBox>

                  <S.qtdBox>
                    <S.btn>
                      <AntDesign
                        name="plus"
                        size={10}
                        color={color.interface.darkgray}
                      />
                    </S.btn>
                    <Text>1</Text>
                    <S.btn style={{ alignItems: "flex-end" }}>
                      <AntDesign
                        name="minus"
                        size={10}
                        color={color.interface.darkgray}
                      />
                    </S.btn>
                  </S.qtdBox>
                  <Text>{formatToBRL(item.Skus[0].MeasurementPrice || 0)}</Text>
                </S.qtdAndPrice>
              </S.item>
            ))}

            <S.whiteBox>
              <Text>Você possui vale presente?</Text>
            </S.whiteBox>

            <S.whiteBox>
              <S.titleInput>Possui cupom de desconto</S.titleInput>
              <S.inputBox>
                <S.input
                  placeholder="Informe o cupom aqui"
                  placeholderTextColor={color.interface.darkgray}
                  keyboardType="default"
                  returnKeyType="done"
                />
              </S.inputBox>
            </S.whiteBox>

            <S.whiteBox style={{ marginBottom: 10 }}>
              <S.titleInput>Código de vendedor</S.titleInput>
              <S.inputBox>
                <S.input
                  placeholder="Código do vendedor"
                  placeholderTextColor={color.interface.darkgray}
                  keyboardType="default"
                  returnKeyType="done"
                />
              </S.inputBox>
            </S.whiteBox>
          </S.cartScroll>

          <S.boxFinishBuy>
            <S.infosBuy>
              <S.textInfosBuy>Desconto</S.textInfosBuy>
              <S.textInfosBuy>R$ 0</S.textInfosBuy>
            </S.infosBuy>

            <S.infosBuy>
              <S.textInfosBuy>Imposto</S.textInfosBuy>
              <S.textInfosBuy>R$ 0</S.textInfosBuy>
            </S.infosBuy>

            <S.infosBuy>
              <S.textInfosBuy>Preço</S.textInfosBuy>
              <S.textInfosBuy>
                {returnTotalPrice(productsInCart)}
              </S.textInfosBuy>
            </S.infosBuy>

            <S.btnBuy>
              <S.textBtnBuy>Fechar pedido</S.textBtnBuy>
            </S.btnBuy>
          </S.boxFinishBuy>
        </>
      ) : (
        <S.noProducts>
          <Text>Adicione produtos ao carrinho</Text>
        </S.noProducts>
      )}
    </S.container>
  );
}
