import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import { ProductProps } from "types/ProductProps";
import { reqProducts } from "./reqs";
import Load from "components/Load";
import CardProduct from "components/CardProduct";
import { Text } from "react-native";

interface ProductCarouselProps {
  item: ModuleHomeSaveOnBackProps;
}

export default function ProductCarousel({ item }: ProductCarouselProps) {
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
              products.map((item) => (
                <S.boxCard key={item.Id}>
                  <CardProduct item={item} />
                </S.boxCard>
              ))}
          </S.carouselConteiner>
          <S.seeMoreBox>
            <S.seeMoreBtn>
              <S.textBtn>Ver mais</S.textBtn>
            </S.seeMoreBtn>
          </S.seeMoreBox>
        </S.containerProducts>
      )}
    </S.container>
  );
}
