import React from "react";

import * as S from "./styles";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { color } from "styles/pallete";

export default function HeaderHome() {
  return (
    <S.container>
      <S.titleStore>Água de coco</S.titleStore>
      <S.boxSearch>
        <SimpleLineIcons
          name="magnifier"
          size={20}
          color={color.interface.darkgray}
        />
        <S.textSearch>Pesquisar produtos</S.textSearch>
      </S.boxSearch>
    </S.container>
  );
}
