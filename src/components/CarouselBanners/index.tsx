import React, { useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import * as S from "./styles";
import { BannerCarouselProps } from "types/BannerCarouselProps";

interface CarouselBannersProps {
  item: ModuleHomeSaveOnBackProps;
}

interface BannerProps {
  item: BannerCarouselProps;
  index: number;
  animationValue: any;
}

export default function CarouselBanners({ item }: CarouselBannersProps) {
  const width = Dimensions.get("window").width;
  const [indexPhoto, setIndexPhoto] = useState(0);

  return (
    <ScrollView>
      <S.container height={item.Element.Banners[0].Height * 0.35 || 500}>
        <Carousel
          loop
          width={width}
          autoPlay={true}
          autoPlayInterval={item?.Element?.TransitionDelay || 5000}
          data={item.Element.Banners}
          scrollAnimationDuration={900}
          vertical={false}
          onSnapToItem={(index) => {
            setIndexPhoto(index);
          }}
          renderItem={({ item }: BannerProps) => (
            <S.item>
              <S.image source={{ uri: item.Image }} resizeMode="stretch" />
            </S.item>
          )}
        />
        <S.containerBalls>
          {item.Element.Banners.map((item: BannerProps, i: number) => (
            <S.ball key={i} isActive={i === indexPhoto} />
          ))}
        </S.containerBalls>
      </S.container>
    </ScrollView>
  );
}
