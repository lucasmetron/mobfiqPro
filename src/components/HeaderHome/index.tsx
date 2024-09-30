import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { color } from "styles/pallete";
import { TouchableNativeFeedback } from "react-native";
import { stacksHome } from "Router/routes";

export default function HeaderHome() {
  const navigation: any = useNavigation();

  return (
    <S.container>
      <S.titleStore>Água de coco</S.titleStore>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate(stacksHome.search);
        }}
      >
        <S.boxSearch>
          <SimpleLineIcons
            name="magnifier"
            size={20}
            color={color.interface.darkgray}
          />
          <S.textSearch>Pesquisar produtos</S.textSearch>
        </S.boxSearch>
      </TouchableNativeFeedback>
    </S.container>
  );
}
