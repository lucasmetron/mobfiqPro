import Toast from "react-native-toast-message";
import { api } from "services/api";
import { CategorieProps } from "types/CategoriesProps";

export async function getCategories() {
  let list: CategorieProps[] = [];
  await api
    .get("adminstore/categories/getall")
    .then((res) => {
      list = res?.data?.Categories || [];
    })
    .catch(() => {
      Toast.show({ type: "error", text1: "Erro ao buscar os dados" });
    });

  return list;
}
