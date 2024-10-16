import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

import * as S from "./styles";
import HeaderDefault from "components/HeaderDefault";
import { stacksProfile, stacksHome, stacksMore } from "Router/routes";
import HeaderHome from "components/HeaderHome";
import HeaderSearch from "components/HeaderSearch";

export default function HeaderApp() {
  const route = useRoute();

  function returnHeaderCorrect() {
    switch (route.name) {
      case stacksHome.initial:
        return <HeaderHome />;

      case stacksHome.search:
        return <HeaderSearch />;

      case stacksProfile.entryAccessCode:
      case stacksProfile.forgotPassword:
      case stacksProfile.createAcounte:
      case stacksHome.plp:
      case stacksMore.centralAtend:
        return <HeaderDefault route={route} showBackArrow={true} />;

      default:
        return <HeaderDefault route={route} />;
    }
  }

  return (
    <SafeAreaView>
      <S.container isHome={route.name === stacksHome.initial}>
        {returnHeaderCorrect()}
      </S.container>
      <S.line />
    </SafeAreaView>
  );
}
