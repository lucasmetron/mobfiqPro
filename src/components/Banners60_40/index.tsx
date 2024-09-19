import React from "react";
import { Text } from "react-native";

import * as S from "./styles";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import { BannerCarouselProps } from "types/BannerCarouselProps";

interface Banner40_60Props {
  item: ModuleHomeSaveOnBackProps;
}

export default function Banner60_40({ item }: Banner40_60Props) {
  const { Element } = item;
  const banners: BannerCarouselProps[] = Element?.Banners || [];

  return (
    <S.container height={banners[0].Height * 0.2}>
      <S.img
        width={6}
        source={{ uri: banners[0].Image }}
        resizeMode="stretch"
      />
      <S.img
        width={4}
        source={{ uri: banners[1].Image }}
        resizeMode="stretch"
      />
    </S.container>
  );
}
