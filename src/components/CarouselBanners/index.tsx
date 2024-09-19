import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import * as S from "./styles";
import { BannerCarouselProps } from "types/BannerCarouselProps";

interface CarouselBanners {
  item: ModuleHomeSaveOnBackProps;
}

interface BannerProps {
  item: BannerCarouselProps;
  index: number;
  animationValue: any;
}

export default function CarouselBanners({ item }: CarouselBanners) {
  console.log("item: ", item);
  const width = Dimensions.get("window").width;
  return (
    <S.container height={500}>
      <Carousel
        loop
        width={width}
        autoPlay={false}
        data={item.Element.Banners}
        scrollAnimationDuration={1000}
        style={{ flex: 1, backgroundColor: "blue" }}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ item }: BannerProps) => (
          <S.item>
            <S.image source={{ uri: item.Image }} resizeMode="stretch" />
          </S.item>
        )}
      />
    </S.container>
  );
}
