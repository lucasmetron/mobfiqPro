import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { color } from "styles/pallete";
import { getMoreOptions } from "./reqs";
import { MenuObjFromBack } from "types/MenuProps";
import Load from "components/Load";
import { stacksMore, stacksCart } from "Router/routes";

export default function More() {
  const navigation: any = useNavigation();
  const [isLoad, setIsLoad] = useState(false);
  const [menuObj, setMenuObj] = useState<MenuObjFromBack | null>(null);

  function redirectToRightRouterById(id: number) {
    switch (id) {
      case 5:
        navigation.navigate(stacksCart.initial);
        return;

      case 15:
        navigation.navigate(stacksMore.centralAtend);
        return;

      case 19:
        navigation.navigate(stacksMore.favorites);
        return;

      default:
        Alert.alert("Erro", `Rota não configurada! ID:${id}`);
        return;
    }
  }

  useEffect(() => {
    (async () => {
      setIsLoad(true);
      const res = await getMoreOptions();
      if (res !== null) {
        setMenuObj(res);
      }
      setIsLoad(false);
    })();
  }, []);

  return isLoad ? (
    <S.loadContainer>
      <Load />
    </S.loadContainer>
  ) : (
    <S.container contentContainerStyle={{ gap: 20, paddingBottom: 10 }}>
      {menuObj?.Sections &&
        menuObj.Sections.length > 0 &&
        menuObj.Sections.map((actualSection, i) => (
          <View key={i}>
            <S.title>{actualSection.Title}</S.title>
            {actualSection.Items.length > 0 ? (
              actualSection.Items.map((item, i2) => (
                <S.boxOptions
                  onPress={() => redirectToRightRouterById(item.Redirect.Type)}
                  key={i2}
                >
                  <S.imgBox>
                    <S.icon resizeMode="contain" source={{ uri: item.Icon }} />
                  </S.imgBox>
                  <S.optionItem>
                    <S.optionTextWithIcon>
                      <S.optionText>{item.Name}</S.optionText>
                      <MaterialIcons
                        name="keyboard-arrow-right"
                        size={30}
                        color={color.interface.lightGray}
                      />
                    </S.optionTextWithIcon>

                    <S.line />
                  </S.optionItem>
                </S.boxOptions>
              ))
            ) : (
              <Text>Nao possui itens</Text>
            )}
          </View>
        ))}
    </S.container>
  );
}
