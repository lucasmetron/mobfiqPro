import React, { useContext, useEffect } from "react";
import { FlatList, Text } from "react-native";

import * as S from "./styles";
import { searchProducts } from "components/SearchProductHome/reqs";
import ProductsListContext from "context/useProductsList";
import Load from "components/Load";
import CardProduct from "components/CardProduct";
import { color } from "styles/pallete";

export default function Plp() {
  const {
    productToSearch,
    setProductsList,
    productsList,
    isLoadProducts,
    setIsLoadProducts,
  } = useContext(ProductsListContext);

  useEffect(() => {
    (async () => {
      setIsLoadProducts(true);
      await searchProducts(productToSearch, setProductsList);
      setIsLoadProducts(false);
    })();
  }, [productToSearch]);

  return isLoadProducts ? (
    <S.loadBox>
      <Load text={`Buscando por "${productToSearch}"`} />
    </S.loadBox>
  ) : (
    <S.container>
      <S.boxInfo>
        <S.titleBox>
          <S.textInfo>Você buscou por:</S.textInfo>
          <S.textInfo style={{ color: color.interface.blue1 }}>
            {productToSearch}
          </S.textInfo>
        </S.titleBox>

        <S.qtdProducts>
          <S.textInfo>{productsList.length}</S.textInfo>
          <S.textInfo>Resultados</S.textInfo>
        </S.qtdProducts>
      </S.boxInfo>
      <FlatList
        data={productsList}
        keyExtractor={(i) => i.Id}
        scrollEnabled={false}
        numColumns={2}
        key={2}
        renderItem={({ item }) => (
          <S.boxCard>
            <CardProduct item={item} />
          </S.boxCard>
        )}
      />
    </S.container>
  );
}
