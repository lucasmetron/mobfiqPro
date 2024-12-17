import appsFlyer from "react-native-appsflyer";
import { ProductProps } from "types/ProductProps";

export function registerEvent(event: string, value: object) {
  appsFlyer.logEvent(
    event,
    value,
    (res) => {
      console.log("evento deu certo", res);
    },
    (err) => {
      console.error("evento deu errado", err);
    }
  );
}

export function returnProductObjToEvent(product: ProductProps) {
  return { idProd: product.Id, nameProd: product.Name };
}
