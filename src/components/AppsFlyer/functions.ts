import appsFlyer from "react-native-appsflyer";
import { DeepLinkDataProps } from "types/DeepLinkDataProps";
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

export function campaignProductSelected(
  link: DeepLinkDataProps,
  navigation: any
) {
  const productId = link.deep_link_value.split("mobfiqpro://product/")[1];

  if (productId) {
    navigation.navigate("product", { productId: productId });
  }
}
