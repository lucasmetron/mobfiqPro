import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

import * as S from "./styles";
import HeaderDefault from "components/HeaderDefault";
import { stacksProfile } from "Router/routes";

export default function HeaderApp() {
  const route = useRoute();

  function returnHeaderCorrect() {
    switch (route.name) {
      case stacksProfile.entryAccessCode:
        return <HeaderDefault route={route} showBackArrow={true} />;

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
