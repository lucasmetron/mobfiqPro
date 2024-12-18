import appsFlyer from "react-native-appsflyer";
import { ProductProps } from "types/ProductProps";

export function registerEvent(event: string, value: object) {
  appsFlyer.logEvent(
    event,
    value,
    (res) => {
      console.log("success - action", res);
    },
    (err) => {
      console.error("error - action", err);
    }
  );
}

export function returnProductObjToEvent(product: ProductProps) {
  return { idProd: product.Id, nameProd: product.Name };
}
