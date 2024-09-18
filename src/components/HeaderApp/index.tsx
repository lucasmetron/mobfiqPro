import React, { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

import * as S from "./styles";
import HeaderDefault from "components/HeaderDefault";

export default function HeaderApp() {
  const route = useRoute();
  console.log("route: ", route);

  function returnHeaderCorrect() {
    switch (route.name) {
      default:
        return <HeaderDefault route={route} />;
    }
  }

  return (
    <SafeAreaView>
      <S.container>{returnHeaderCorrect()}</S.container>
      <S.line />
    </SafeAreaView>
  );
}
