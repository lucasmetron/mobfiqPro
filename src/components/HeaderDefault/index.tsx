import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIconsfrom from "react-native-vector-icons/MaterialIcons";
import { RFPercentage } from "react-native-responsive-fontsize";

import * as S from "./styles";
import { RouteProps } from "types/RouteProps";
import { color } from "styles/pallete";
import { deleteTypeNavigatorFromString } from "utils/functions";
import HeaderDefaultContext from "context/useHeaderDefaultContext";

interface HeaderDefaultProps {
  route: RouteProps;
  showBackArrow?: boolean;
}

export default function HeaderDefault({
  route,
  showBackArrow = false,
}: HeaderDefaultProps) {
  const navigator = useNavigation();
  const { nameRouter, setNameRouter } = useContext(HeaderDefaultContext);

  return (
    <S.container>
      <S.title>
        {nameRouter === ""
          ? deleteTypeNavigatorFromString(route.name)
          : nameRouter}
      </S.title>
      {showBackArrow && (
        <S.btnGoBack
          onPress={() => {
            navigator.goBack();
            setNameRouter("");
          }}
        >
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
