import React, { useContext, useLayoutEffect, useState } from "react";

import * as S from "./styles";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { color } from "styles/pallete";
import useDebounce from "hooks/useDebounce";
import { searchProducts } from "./reqs";
import ProductsListContext from "context/useProductsList";
import Load from "components/Load";

export default function SearchProduct() {
  const { setIsLoadProducts, setProductsList, setProductToSearch } =
    useContext(ProductsListContext);
  const [searchText, setSearchText] = useState("");

  const textDebounced = useDebounce(searchText, 1500);

  useLayoutEffect(() => {
    if (textDebounced !== "") {
      (async () => {
        setIsLoadProducts(true);
        setProductToSearch(textDebounced);
        await searchProducts(textDebounced, setProductsList);
        setProductToSearch("");
        setIsLoadProducts(false);
      })();
    }
  }, [textDebounced]);

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
