import React from "react";
import { ActivityIndicator } from "react-native";

import * as S from "./styles";
import { color as pallete } from "styles/pallete";

interface LoadProps {
  text?: string;
  size?: "large" | "small";
  color?: string;
}

export default function Load({
  text = "Carregando...",
  size = "large",
  color = pallete.interface.blue1,
}: LoadProps) {
  return (
    <S.container>
      <ActivityIndicator size={size} color={color} />
      <S.text>{text}</S.text>
    </S.container>
  );
}
