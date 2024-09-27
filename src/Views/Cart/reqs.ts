import { Alert } from "react-native";
import { api } from "services/api";
import { ProductProps } from "types/ProductProps";

const payloadToGetOneProduct = {
  Query: null,
  OrderBy: 1,
  Size: 2,
  Offset: 0,
  Filter: null,
  ApiQuery: null,
  ProductId: null,
  BrandId: null,
  Hotsite: null,
  RealProductId: null,
  EAN: null,
  RealProductIdGroup: null,
  FacetItems: null,
  SearchApi: null,
  ReferencId: null,
  ReferencIdGroup: null,
  IsAutoComplete: false,
  IsRecommendation: false,
  Placement: null,
  RecommendationProductID: null,
};

export async function getProduct() {
  let products: ProductProps[] = [];

  await api
    .post("adminstore/home/search", payloadToGetOneProduct)
    .then((res) => {
      if (res.data?.Products.length > 0) {
        products = res.data.Products;
      }
    })
    .catch(() => {
      Alert.alert("Erro", "Ocorreu um erro ao buscar os dados");
    });

  return products;
}
