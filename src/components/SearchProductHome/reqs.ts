import { Alert } from "react-native";
import { api } from "services/api";
import { ProductProps } from "types/ProductProps";

export async function searchProducts(
  productText: string,
  setProductsList: React.Dispatch<React.SetStateAction<ProductProps[]>>
) {
  await api
    .post("adminstore/home/search", { Query: productText })
    .then((res) => {
      setProductsList(res.data?.Products || []);
    })
    .catch(() => {
      Alert.alert("Erro ao buscar produtos");
      setProductsList([]);
    });
}
