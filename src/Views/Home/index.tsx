import React, { useContext } from "react";
import { Text } from "react-native";

import * as S from "./styles";
import DataHomeContext from "context/useHomeContext";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import CarouselBanners from "components/CarouselBanners";

export default function Home() {
  const { dataHome } = useContext(DataHomeContext);

  function returnCompByType(item: ModuleHomeSaveOnBackProps) {
    switch (item.Type!) {
      case 0:
        return <CarouselBanners key={item.Id} item={item} />;

      default:
        return <Text key={item.Id}>a fazer {item.Type}</Text>;
    }
  }

  return (
    <S.container contentContainerStyle={{ gap: 20 }}>
      {dataHome.length > 0 && dataHome.map((item) => returnCompByType(item))}
    </S.container>
  );
}
