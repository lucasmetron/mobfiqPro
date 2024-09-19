import React from "react";
import { Text } from "react-native";

import * as S from "./styles";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import { BannerCarouselProps } from "types/BannerCarouselProps";

interface IndividualBannerProps {
  item: ModuleHomeSaveOnBackProps;
}

export default function IndividualBanner({ item }: IndividualBannerProps) {
  const { Element } = item;
  const banner: BannerCarouselProps = Element;

  return (
    <S.container height={banner.Height / 3 || 500}>
      <S.img source={{ uri: banner.Image }} />
    </S.container>
  );
}
