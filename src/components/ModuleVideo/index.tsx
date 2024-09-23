import React from "react";
import { Text } from "react-native";
import { WebView } from "react-native-webview";

import * as S from "./styles";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";
import { ModuleVideoPropsBack } from "types/ModuleVideoPropsBack";

interface ModuleVideoProps {
  item: ModuleHomeSaveOnBackProps;
}

export default function ModuleVideo({ item }: ModuleVideoProps) {
  const { Element } = item;
  const dataModule: ModuleVideoPropsBack = Element;

  return (
    <S.container>
      <WebView source={{ uri: dataModule.Url }} style={{ flex: 1 }} />
    </S.container>
  );
}
