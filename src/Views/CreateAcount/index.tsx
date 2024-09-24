import React, { useState } from "react";
import { Text } from "react-native";

import * as S from "./styles";
import { color } from "styles/pallete";
import { FormCreatAccount } from "types/FormCreatAccount";

const intialDataForm: FormCreatAccount = {
  name: "",
  midleName: "",
  email: "",
  cpf: null,
  birthday: "",
  phone: "",
  gen: 0,
};

export default function CreateAcount() {
  const [canSave, setCanSave] = useState(false);
  const [formData, setFormData] = useState<FormCreatAccount>(intialDataForm);

  return (
    <S.container>
      <S.title>Dados pessoais</S.title>

      <S.inputBox>
        <S.input
          value={formData.name}
          onChangeText={(text) =>
            setFormData((obj) => ({ ...obj, name: text }))
          }
          autoFocus
          placeholder="Nome *"
          placeholderTextColor={color.interface.darkgray}
          keyboardType="default"
          returnKeyType="done"
        />
      </S.inputBox>

      <S.inputBox>
        <S.input
          value={formData.midleName}
          onChangeText={(text) =>
            setFormData((obj) => ({ ...obj, midleName: text }))
          }
          placeholder="Sobrenome *"
          placeholderTextColor={color.interface.darkgray}
          keyboardType="default"
          returnKeyType="done"
        />
      </S.inputBox>

      <S.inputBox>
        <S.input
          value={formData.email}
          onChangeText={(text) =>
            setFormData((obj) => ({ ...obj, email: text }))
          }
          placeholder="Email *"
          placeholderTextColor={color.interface.darkgray}
          keyboardType="default"
          returnKeyType="done"
        />
      </S.inputBox>

      <S.inputBox>
        <S.input
          value={formData.cpf !== null ? formData.cpf.toString() : ""}
          onChangeText={(text) =>
            setFormData((obj) => ({ ...obj, cpf: parseInt(text) }))
          }
          placeholder="CPF *"
          placeholderTextColor={color.interface.darkgray}
          keyboardType="numeric"
          returnKeyType="done"
        />
      </S.inputBox>

      <S.inputBox>
        <S.input
          value={formData.birthday}
          onChangeText={(text) =>
            setFormData((obj) => ({ ...obj, birthday: text }))
          }
          placeholder="Data de nascimento"
          placeholderTextColor={color.interface.darkgray}
          keyboardType="default"
          returnKeyType="done"
          editable={false}
        />
      </S.inputBox>

      <S.inputBox>
        <S.input
          value={formData.phone}
          onChangeText={(text) =>
            setFormData((obj) => ({ ...obj, phone: text }))
          }
          placeholder="Telefone"
          placeholderTextColor={color.interface.darkgray}
          keyboardType="numeric"
          returnKeyType="done"
        />
      </S.inputBox>

      <S.genBox>
        <S.textGen>Gênero</S.textGen>
        <S.optionsGen>
          <S.textOptions
            onPress={() => {
              setFormData((obj) => ({ ...obj, gen: 0 }));
            }}
            selected={formData.gen === 0 ? true : false}
          >
            Masculino
          </S.textOptions>
          <S.textOptions
            onPress={() => {
              setFormData((obj) => ({ ...obj, gen: 1 }));
            }}
            selected={formData.gen === 1 ? true : false}
          >
            Feminino
          </S.textOptions>
          <S.textOptions
            onPress={() => {
              setFormData((obj) => ({ ...obj, gen: 2 }));
            }}
            selected={formData.gen === 2 ? true : false}
          >
            Outros
          </S.textOptions>
        </S.optionsGen>
      </S.genBox>

      <S.confirmBtn
        color={canSave ? color.interface.blue1 : color.interface.lightGray}
      >
        <S.textBtn>Entrar</S.textBtn>
      </S.confirmBtn>
    </S.container>
  );
}
