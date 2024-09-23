import React from "react";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { RFPercentage } from "react-native-responsive-fontsize";

import * as S from "./styles";
import { color } from "styles/pallete";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import { ShortCutPropsBack } from "types/ShortCutProps";

interface ShortCutProps {
  item: ModuleHomeSaveOnBackProps;
}

export default function ShortCut({ item }: ShortCutProps) {
  const { Element } = item;
  const itemShortCut: ShortCutPropsBack = Element;

  return (
    <S.container>
      <S.box>
        <Feather
          size={RFPercentage(3)}
          name="list"
          color={color.interface.lightGray}
        />
        <S.text>{itemShortCut.Text}</S.text>
      </S.box>

      <MaterialIcons
        size={RFPercentage(3)}
        name="keyboard-arrow-right"
        color={color.interface.lightGray}
      />
    </S.container>
  );
}
