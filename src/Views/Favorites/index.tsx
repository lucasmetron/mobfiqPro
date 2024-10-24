import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { color } from "styles/pallete";
import { stacksHome } from "Router/routes";

export default function Favorites() {
  const navigator: any = useNavigation();

  return (
    <S.container>
      <S.noProducts>
        <S.iconHeart>
          <MaterialIcons
            name="favorite"
            color={color.interface.white}
            size={60}
          />
        </S.iconHeart>
        <S.textNoItens>
          Para favoritar um produto clique no coração
        </S.textNoItens>
        <S.btnToHome
          onPress={() => {
            navigator.navigate(stacksHome.initial);
          }}
        >
          <S.textBtn>Adicionar Produtos</S.textBtn>
        </S.btnToHome>
      </S.noProducts>
    </S.container>
  );
}
