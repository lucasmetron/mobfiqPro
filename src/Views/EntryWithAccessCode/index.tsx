import React from "react";
import { Text } from "react-native";

import * as S from "./styles";
import { color } from "styles/pallete";

export default function EntryWithAccessCode() {
  return (
    <S.container>
      <S.info>
        Informe o seu e-mail, que enviaremos um código para voçe acessar de
        forma rápida a nossa loja
      </S.info>

      <S.inputBox>
        <S.input
          placeholder="Informe seu e-mail"
          autoFocus
          placeholderTextColor={color.interface.darkgray}
          keyboardType="email-address"
        />
      </S.inputBox>

      <S.btn>
        <S.textBtn>Enviar código</S.textBtn>
      </S.btn>

      <S.inputBox>
        <S.input
          placeholder="Digite o seu código"
          placeholderTextColor={color.interface.darkgray}
          keyboardType="numeric"
        />
      </S.inputBox>

      <S.notYetReciveTheCodeBox>
        <S.notYetReciveTheCode>Ainda não é cadastrado?</S.notYetReciveTheCode>
        <S.notYetReciveTheCodeBtn>Reenviar código</S.notYetReciveTheCodeBtn>
      </S.notYetReciveTheCodeBox>
    </S.container>
  );
}
