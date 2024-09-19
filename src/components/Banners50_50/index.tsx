import React from "react";
import { Text } from "react-native";

import * as S from "./styles";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import { BannerCarouselProps } from "types/BannerCarouselProps";

interface Banners50_50Props {
  item: ModuleHomeSaveOnBackProps;
}

export default function Banners50_50({ item }: Banners50_50Props) {
  const { Element } = item;
  const banners: BannerCarouselProps[] = Element?.Banners || [];

  console.log("item: ", item);
  console.log("banners teste: ", banners);
  return (
    <S.container height={banners[0].Height * 0.2}>
      <S.img source={{ uri: banners[0].Image }} resizeMode="stretch" />
      <S.img source={{ uri: banners[1].Image }} resizeMode="stretch" />
    </S.container>
  );
}
