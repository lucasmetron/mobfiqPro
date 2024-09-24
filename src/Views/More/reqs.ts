import Toast from "react-native-toast-message";
import { api } from "services/api";
import { MenuObjFromBack } from "types/MenuProps";

export async function getMoreOptions(): Promise<MenuObjFromBack | null> {
  let moreObj: MenuObjFromBack | null = null;
  await api
    .post("adminstore/configuration/getbyflag", [116])
    .then((res) => {
      const obj: MenuObjFromBack = res.data.Configuration[0].Value;
      moreObj = obj;
    })
    .catch(() => {
      Toast.show({ type: "error", text1: "Erro ao buscar os dados" });
      moreObj = null;
    });

  return moreObj;
}
