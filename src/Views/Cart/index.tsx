import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import * as S from "./styles";
import { getProduct } from "./reqs";
import { ProductProps } from "types/ProductProps";
import Load from "components/Load";
import { formatToBRL } from "utils/functions";
import { color } from "styles/pallete";

export default function Cart() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  console.log("products: ", products);

  useEffect(() => {
    (async () => {
      setIsLoad(true);
      const newProducts = await getProduct();
      if (newProducts.length > 0) {
        setProducts(newProducts);
      }
      setIsLoad(false);
    })();
  }, []);

  return isLoad ? (
    <S.loadBox>
      <Load text="Carregando produtos..." />
    </S.loadBox>
  ) : (
    <S.container>
      {products.length > 0 ? (
        <>
          <S.cartScroll contentContainerStyle={{ gap: 10 }}>
            {products.map((item) => (
              <S.item key={item.Id}>
                <S.boxPhotoAndTitleProdutc>
                  <S.imgProduct
                    resizeMode="stretch"
                    source={{ uri: item.Skus[0]?.Images[0]?.ImageUrl }}
                  />
                  <S.boxTitleAndSubTitle>
                    <Text numberOfLines={2}>{item.Name}</Text>
                    <Text numberOfLines={1}>Fornecido e entregue por: </Text>
                  </S.boxTitleAndSubTitle>
                </S.boxPhotoAndTitleProdutc>

                <S.qtdAndPrice>
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
            <Text>teste</Text>
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
