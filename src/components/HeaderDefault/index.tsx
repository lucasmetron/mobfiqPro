import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIconsfrom from "react-native-vector-icons/MaterialIcons";
import { RFPercentage } from "react-native-responsive-fontsize";

import * as S from "./styles";
import { RouteProps } from "types/RouteProps";
import { color } from "styles/pallete";
import { deleteTypeNavigatorFromString } from "utils/functions";

interface HeaderDefaultProps {
  route: RouteProps;
  showBackArrow?: boolean;
}

export default function HeaderDefault({
  route,
  showBackArrow = false,
}: HeaderDefaultProps) {
  const navigator = useNavigation();

  return (
    <S.container>
      <S.title>{deleteTypeNavigatorFromString(route.name) || ""}</S.title>
      {showBackArrow && (
        <S.btnGoBack onPress={() => navigator.goBack()}>
          <MaterialIconsfrom
            name="arrow-back-ios"
            color={color.interface.blue1}
            size={RFPercentage(2.5)}
          />
        </S.btnGoBack>
      )}
    </S.container>
  );
}
