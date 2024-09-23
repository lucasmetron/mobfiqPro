import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import * as S from "./styles";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import { ProductProps, SkusProps } from "types/ProductProps";
import { reqProducts } from "./reqs";

import Load from "components/Load";
import CardProduct from "components/CardProduct";

interface ProductCarouselProps {
  item: ModuleHomeSaveOnBackProps;
}

export default function ProductCarousel({ item }: ProductCarouselProps) {
  const { Element } = item;
  const [products, setProducts] = useState<ProductProps[]>([]);
  console.log("products: ", products);
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
      {isLoad ? (
        <S.loadContainer>
          <Load />
        </S.loadContainer>
      ) : (
        <S.containerProducts>
          <S.title>{Element.Title}</S.title>
          <S.carouselConteiner
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          >
            {products.length > 0 &&
              products.map((item) => <CardProduct key={item.Id} item={item} />)}
          </S.carouselConteiner>
        </S.containerProducts>
      )}
    </S.container>
  );
}
