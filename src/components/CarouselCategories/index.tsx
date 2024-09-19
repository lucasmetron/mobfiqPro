import React from "react";

import * as S from "./styles";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import { CategorieProps } from "types/CategoriesProps";

interface CarouselCategoriesProps {
  item: ModuleHomeSaveOnBackProps;
}

export default function CarouselCategories({ item }: CarouselCategoriesProps) {
  const { Element } = item;
  const categories: CategorieProps[] = Element.Categories;
  return (
    <S.container>
      <S.line />
      <S.title>{Element.Title}</S.title>

      <S.boxCategories
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      >
        {categories.length > 0 &&
          categories.map((item) => (
            <S.itemCategorie key={item.Id}>
              <S.icon>{item.Icon || "Sem icon"} </S.icon>
            </S.itemCategorie>
          ))}
      </S.boxCategories>
    </S.container>
  );
}
