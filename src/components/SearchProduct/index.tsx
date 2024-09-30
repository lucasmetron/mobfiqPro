import React, { useContext, useLayoutEffect, useState } from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

import * as S from "./styles";
import { color } from "styles/pallete";
import useDebounce from "hooks/useDebounce";
import { searchProducts } from "./reqs";
import ProductsListContext from "context/useProductsList";

interface SearchProductProps {
  onSubmitFuction?: any;
}

export default function SearchProduct({
  onSubmitFuction = () => {},
}: SearchProductProps) {
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
        keyboardType="default"
        returnKeyType="done"
        onSubmitEditing={() => {
          onSubmitFuction();
        }}
      />
      {searchText !== "" && (
        <AntDesign
          name="closecircle"
          size={20}
          color={color.interface.darkgray}
          onPress={() => {
            setSearchText("");
            setProductToSearch("");
            setProductsList([]);
          }}
        />
      )}
    </S.container>
  );
}
