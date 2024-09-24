import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import * as S from "./styles";
import { getCategories } from "./reqs";
import Load from "components/Load";
import { CategorieProps } from "types/CategoriesProps";

export default function Categories() {
  const [isLoad, setIsLoad] = useState(false);
  const [listCategories, setListCategories] = useState<CategorieProps[]>([]);

  function itemCategorie(item: CategorieProps) {
    return (
      <S.itemCategorie>
        <S.icon>{item.Icon}</S.icon>
        <S.title>{item.Name}</S.title>
      </S.itemCategorie>
    );
  }

  useEffect(() => {
    (async () => {
      setIsLoad(true);
      const res = await getCategories();
      setListCategories(res);
      setIsLoad(false);
    })();
  }, []);

  return isLoad ? (
    <S.loadContainer>
      <Load />
    </S.loadContainer>
  ) : (
    <S.container contentContainerStyle={{ gap: 10 }}>
      <FlatList
        data={listCategories}
        scrollEnabled={false}
        keyExtractor={(i) => i.Id.toString()}
        renderItem={({ item }) => itemCategorie(item)}
        numColumns={2}
        key={2}
        style={{ marginBottom: 20 }}
      />
    </S.container>
  );
}
