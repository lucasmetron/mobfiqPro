import React, { useContext } from "react";
import { Image, Text } from "react-native";

import * as S from "./styles";
import ProductsListContext from "context/useProductsList";
import Load from "components/Load";
import { formatToBRL } from "utils/functions";

export default function SearchScreen() {
  const { isLoadProducts, productToSearch, productsList } =
    useContext(ProductsListContext);

  return isLoadProducts ? (
    <S.loadBox>
      <Load text={`Buscando por "${productToSearch}"`} />
    </S.loadBox>
  ) : (
    <S.container>
      {productsList.length > 0 &&
        productsList.map((product) => (
          <S.product key={product.Id}>
            <S.image
              source={{ uri: product.Skus[0].Images[0].ImageUrl }}
              resizeMode="stretch"
            />
            <S.name numberOfLines={1}>{product.Name}</S.name>
            <S.price>
              {formatToBRL(product.Skus[0].MeasurementPrice || 0)}
            </S.price>
          </S.product>
        ))}

      {!isLoadProducts && productsList.length === 0 && (
        <S.noProducts>
          <Text>Não há produtos</Text>
        </S.noProducts>
      )}
    </S.container>
  );
}
