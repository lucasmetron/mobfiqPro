import { api } from "services/api";
import { ProductProps } from "types/ProductProps";

export async function reqProducts(query: string) {
  let products: ProductProps[] = [];
  await api
    .post("adminstore/home/search", query)
    .then((res) => {
      console.log("res: ", res);
      products = res.data.Products;
    })
    .catch(() => {
      products = [];
    });

  return products;
}
