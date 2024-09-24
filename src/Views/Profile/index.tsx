import React, { useLayoutEffect, useState, useContext } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { color } from "styles/pallete";
import { stacksProfile } from "Router/routes";
import HeaderDefaultContext from "context/useHeaderDefaultContext";

export default function Profile() {
  const navigation: any = useNavigation();
  const { setNameRouter } = useContext(HeaderDefaultContext);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <S.container>
      <S.btn
        onPress={() => {
          navigation.navigate(stacksProfile.entryAccessCode);
          setNameRouter("Entrar com código de acesso");
        }}
      >
        <Fontisto name="unlocked" size={15} color={color.interface.white} />
        <S.textBtn>Entrar com código de acesso</S.textBtn>
      </S.btn>

      <S.inputBox>
        <S.input
          placeholder="Email"
          autoFocus
          placeholderTextColor={color.interface.darkgray}
          keyboardType="email-address"
        />
      </S.inputBox>

      <S.inputBox>
        <S.input
          secureTextEntry={showPassword}
          placeholder="Senha"
          placeholderTextColor={color.interface.darkgray}
        />
        <Ionicons
          onPress={() => setShowPassword((value) => !value)}
          name={showPassword ? "eye" : "eye-off"}
          size={15}
          color={color.interface.darkgray}
        />
      </S.inputBox>

      <S.btn>
        <Fontisto name="email" size={15} color={color.interface.white} />
        <S.textBtn>Entrar com e-mail</S.textBtn>
      </S.btn>

      <S.boxforgotPassword>
        <S.textForgotPassword color={color.interface.black}>
          Esqueceu a senha?
        </S.textForgotPassword>

        <S.btnNoBackground
          onPress={() => {
            navigation.navigate(stacksProfile.forgotPassword);
            setNameRouter("Esqueci a senha");
          }}
        >
          <S.textForgotPassword color={color.interface.blue1}>
            Clique aqui
          </S.textForgotPassword>
        </S.btnNoBackground>
      </S.boxforgotPassword>

      <S.notYetRegisterText>Ainda não é cadastrado?</S.notYetRegisterText>
      <S.btnOutline
        onPress={() => {
          navigation.navigate(stacksProfile.createAcounte);
          setNameRouter("Criar conta");
        }}
      >
        <S.textBtnOutline>Criar nova conta</S.textBtnOutline>
      </S.btnOutline>
    </S.container>
  );
}
