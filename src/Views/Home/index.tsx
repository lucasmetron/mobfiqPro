import React, { useContext } from "react";
import { Text } from "react-native";

import * as S from "./styles";
import DataHomeContext from "context/useHomeContext";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import CarouselBanners from "components/CarouselBanners";
import IndividualBanner from "components/IndividualBanner";
import Banners50_50 from "components/Banners50_50";
import Banners3_3 from "components/Banners3_3";
import Banners1_2 from "components/Banners1_2";
import Banner40_60 from "components/Banner40_60";
import Banners60_40 from "components/Banners60_40";
import CarouselCategories from "components/CarouselCategories";
import ShortCut from "components/ShortCut";
import ProductCarousel from "components/ProductCarousel";
import BrandCarousel from "components/BrandCarousel";

export default function Home() {
  const { dataHome, isLoadData } = useContext(DataHomeContext);

  function returnCompByType(item: ModuleHomeSaveOnBackProps) {
    switch (item.Type!) {
      case 0:
        return <CarouselBanners key={item.Id} item={item} />;
      case 1:
        return <IndividualBanner key={item.Id} item={item} />;
      case 2:
        return <ProductCarousel key={item.Id} item={item} />;
      case 4:
        return <CarouselCategories key={item.Id} item={item} />;
      case 5:
        return <ShortCut key={item.Id} item={item} />;
      case 6:
        return <Banners3_3 key={item.Id} item={item} />;
      case 7:
        return <Banner40_60 key={item.Id} item={item} />;
      case 8:
        return <Banners50_50 key={item.Id} item={item} />;
      case 9:
        return <Banners60_40 key={item.Id} item={item} />;
      case 10:
        return <Banners1_2 key={item.Id} item={item} />;
      case 12:
        return <BrandCarousel key={item.Id} item={item} />;

      default:
        return <Text key={item.Id}>a fazer {item.Type}</Text>;
    }
  }

  return (
    <S.container contentContainerStyle={{ gap: 20 }}>
      {!isLoadData &&
        dataHome.length > 0 &&
        dataHome.map((item) => returnCompByType(item))}
      {!isLoadData && dataHome.length === 0 && (
        <S.noDataHome>
          <S.noDataHomeText>Não há itens na home</S.noDataHomeText>
        </S.noDataHome>
      )}
    </S.container>
  );
}
