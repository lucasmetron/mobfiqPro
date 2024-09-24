import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import * as S from "./styles";
import { color } from "styles/pallete";
import Toast from "react-native-toast-message";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [canSave, setCanSave] = useState(false);

  function save() {
    if (!canSave) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Prencha todos os campos",
      });
    }
  }

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
          returnKeyType="done"
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
          returnKeyType="done"
        />
      </S.inputBox>

      <S.inputBox>
        <S.input
          secureTextEntry={showPassword}
          placeholder="Senha"
          placeholderTextColor={color.interface.darkgray}
          returnKeyType="done"
        />
        <Ionicons
          onPress={() => setShowPassword((value) => !value)}
          name={showPassword ? "eye" : "eye-off"}
          size={15}
          color={color.interface.darkgray}
        />
      </S.inputBox>

      <S.inputBox>
        <S.input
          returnKeyType="done"
          secureTextEntry={showPasswordConfirm}
          placeholder="Repita a senha"
          placeholderTextColor={color.interface.darkgray}
        />
        <Ionicons
          onPress={() => setShowPasswordConfirm((value) => !value)}
          name={showPasswordConfirm ? "eye" : "eye-off"}
          size={15}
          color={color.interface.darkgray}
        />
      </S.inputBox>

      <S.notYetReciveTheCodeBox>
        <S.notYetReciveTheCode>Não recebeu o código?</S.notYetReciveTheCode>
        <S.notYetReciveTheCodeBtn>Reenviar código</S.notYetReciveTheCodeBtn>
      </S.notYetReciveTheCodeBox>

      <S.confirmBtn
        onPress={save}
        color={canSave ? color.interface.blue1 : color.interface.lightGray}
      >
        <S.textBtn>Entrar</S.textBtn>
      </S.confirmBtn>
    </S.container>
  );
}
