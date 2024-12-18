import React from "react";
import { api } from "services/api";
import { ProductProps } from "types/ProductProps";
import { stacksMain } from "Router/routes";

export async function getProductByDeepLink(
  id: string,
  setProductSelected: React.Dispatch<React.SetStateAction<ProductProps | null>>,
  setIsReq: React.Dispatch<React.SetStateAction<boolean>>,
  navigator: any
) {
  const payload = {
    Query: null,
    OrderBy: 1,
    Size: 1,
    Offset: 0,
    Filter: null,
    ApiQuery: null,
    ProductId: null,
    BrandId: null,
    Hotsite: null,
    RealProductId: id,
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

  setIsReq(true);

  await api
    .post("adminstore/home/search", payload)
    .then((res) => {
      if (res?.data?.Products && res.data.Products.length > 0) {
        setProductSelected(res.data.Products[0]);
      } else {
        navigator.navigate(stacksMain.tabs);
      }
    })
    .catch(() => {
      navigator.navigate(stacksMain.tabs);
    });

  setIsReq(false);
}
