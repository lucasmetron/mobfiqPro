import React from "react";
import { Text } from "react-native";

import * as S from "./styles";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import { CarouselBrand } from "types/CarouselBrand";

interface BrandCarouselProps {
  item: ModuleHomeSaveOnBackProps;
}

export default function BrandCarousel({ item }: BrandCarouselProps) {
  const { Element } = item;
  const bannersObjs: CarouselBrand = Element;

  return (
    <S.container>
      <S.line />
      <S.title>{bannersObjs.Title}</S.title>

      <S.carouselConteiner
        horizontal
        contentContainerStyle={{ gap: 8 }}
        height={bannersObjs?.Banners[0]?.Height * 0.15 || 200}
        showsHorizontalScrollIndicator={false}
      >
        {bannersObjs.Banners.length > 0 &&
          bannersObjs.Banners.map((item) => (
            <S.itemCarousel>
              <S.img resizeMode="stretch" source={{ uri: item.Image }} />
            </S.itemCarousel>
          ))}
      </S.carouselConteiner>
    </S.container>
  );
}
