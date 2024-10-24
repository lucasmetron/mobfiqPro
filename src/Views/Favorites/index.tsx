import React, { useContext } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

import * as S from "./styles";
import { color } from "styles/pallete";
import { stacksHome } from "Router/routes";
import useFavoritesContext from "context/useFavoritesContext";
import { ProductProps } from "types/ProductProps";
import { formatToBRL } from "utils/functions";

export default function Favorites() {
  const navigator: any = useNavigation();
  const { favorites, setFavorites } = useContext(useFavoritesContext);

  function deleteItemFromFavoriteList(product: ProductProps) {
    const newList = favorites.filter((item) => item.Id !== product.Id);
    setFavorites(newList);
  }

  function returnProduct(item: ProductProps) {
    return (
      <S.containerProduct>
        <S.cardProduct>
          <S.img
            source={{ uri: item.Skus[0]?.Images[0]?.ImageUrl }}
            resizeMode="stretch"
          />
          <S.boxInfos>
            <S.title numberOfLines={2}>{item.Name}</S.title>
            <S.price numberOfLines={1}>
              {formatToBRL(item.Skus[0].MeasurementPrice || 0)}
            </S.price>
          </S.boxInfos>

          <S.boxBtns>
            <S.favoriteAndDeleteBtns>
              <MaterialIcons
                onPress={() => deleteItemFromFavoriteList(item)}
                name="delete"
                color={color.interface.darkgray}
                size={25}
              />
              <S.iconHeartSmall>
                <MaterialIcons
                  name="favorite"
                  color={color.interface.white}
                  size={15}
                />
              </S.iconHeartSmall>
            </S.favoriteAndDeleteBtns>

            <S.buyBtn>
              <S.textBuyBtn>Comprar</S.textBuyBtn>
            </S.buyBtn>
          </S.boxBtns>
        </S.cardProduct>
      </S.containerProduct>
    );
  }

  return (
    <S.container>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(i) => i.Id}
          renderItem={({ item }) => returnProduct(item)}
          contentContainerStyle={{
            gap: 10,
            marginTop: 10,
            paddingBottom: 20,
          }}
        />
      ) : (
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
      )}
    </S.container>
  );
}
