import React, { useContext, useLayoutEffect, useState } from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { color } from "styles/pallete";
import useDebounce from "hooks/useDebounce";
import { searchProducts } from "./reqs";
import ProductsListContext from "context/useProductsList";
import { stacksHome } from "Router/routes";
import { Alert } from "react-native";

export default function SearchProductHome() {
  const navigation: any = useNavigation();
  const { setIsLoadProducts, setProductsList, setProductToSearch } =
    useContext(ProductsListContext);
  const [searchText, setSearchText] = useState("");

  const textDebounced = useDebounce(searchText, 1500);

  function onSubmitKeyboard() {
    if (searchText === "") {
      Alert.alert("Preencha o campo de busca.");
    } else {
      setProductToSearch(searchText);
      navigation.navigate(stacksHome.plp);
    }
  }

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
        onPress={onSubmitKeyboard}
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
        onSubmitEditing={onSubmitKeyboard}
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
