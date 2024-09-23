import React from "react";
import { Text } from "react-native";

import * as S from "./styles";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import { BannerCarouselProps } from "types/BannerCarouselProps";

interface Banners2_1Props {
  item: ModuleHomeSaveOnBackProps;
}

export default function Banners2_1({ item }: Banners2_1Props) {
  const { Element } = item;
  const banners: BannerCarouselProps[] = Element?.Banners || [];

  return (
    <S.container height={banners[0].Height * 0.2}>
      <S.twoImgs>
        <S.img source={{ uri: banners[0].Image }} resizeMode="stretch" />
        <S.img source={{ uri: banners[1].Image }} resizeMode="stretch" />
      </S.twoImgs>
      <S.img source={{ uri: banners[1].Image }} resizeMode="stretch" />
    </S.container>
  );
}
