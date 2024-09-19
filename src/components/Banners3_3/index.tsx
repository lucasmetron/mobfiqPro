import React from "react";
import { Text } from "react-native";

import * as S from "./styles";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import { BannerCarouselProps } from "types/BannerCarouselProps";

interface Banners3_3Props {
  item: ModuleHomeSaveOnBackProps;
}

export default function Banners3_3({ item }: Banners3_3Props) {
  const { Element } = item;
  const banners: BannerCarouselProps[] = Element?.Banners || [];

  return (
    <S.container height={banners[0].Height * 0.25}>
      <S.img source={{ uri: banners[0].Image }} resizeMode="stretch" />
      <S.img source={{ uri: banners[1].Image }} resizeMode="stretch" />
      <S.img source={{ uri: banners[2].Image }} resizeMode="stretch" />
    </S.container>
  );
}
