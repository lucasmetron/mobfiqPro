import React, { useState, useEffect } from "react";
import { Text, FlatList, View } from "react-native";

import * as S from "./styles";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import { ProductProps, SkusProps } from "types/ProductProps";
import { reqProducts } from "./reqs";
import Load from "components/Load";
import CardProduct from "components/CardProduct";

interface ProductGridProps {
  item: ModuleHomeSaveOnBackProps;
}

export default function ProductGrid({ item }: ProductGridProps) {
  const { Element } = item;
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoad(true);
      const productsReq = await reqProducts(Element.Redirect.SearchCriteria);
      setProducts(productsReq);
      setIsLoad(false);
    })();
  }, []);

  return (
    <S.container>
      <S.line />
      <S.title>{Element.Title}</S.title>

      {isLoad ? (
        <S.loadContainer>
          <Load />
        </S.loadContainer>
      ) : (
        <View>
          <FlatList
            data={products}
            keyExtractor={(i) => i.Id}
            numColumns={2}
            key={2}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <S.boxCard>
                <CardProduct item={item} />
              </S.boxCard>
            )}
          />
        </View>
      )}
    </S.container>
  );
}
