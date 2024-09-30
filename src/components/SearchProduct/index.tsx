import React, { useState } from "react";

import * as S from "./styles";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { color } from "styles/pallete";

export default function SearchProduct() {
  const [searchText, setSearchText] = useState("");

  return (
    <S.container>
      <SimpleLineIcons
        name="magnifier"
        size={20}
        color={color.interface.darkgray}
      />
      <S.textSearch
        value={searchText}
        placeholder="Pesquisar produtos"
        autoFocus
        onChangeText={(text) => setSearchText(text)}
      />
    </S.container>
  );
}
