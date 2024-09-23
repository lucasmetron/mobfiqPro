import { api } from "services/api";
import { ProductProps } from "types/ProductProps";

export async function reqProducts(query: any) {
  let products: ProductProps[] = [];
  await api
    .post("adminstore/home/search", query)
    .then((res) => {
      products = res.data.Products;
    })
    .catch(() => {
      products = [];
    });

  return products;
}
