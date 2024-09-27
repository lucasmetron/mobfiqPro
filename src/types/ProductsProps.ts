import { ItemCustomTagProps } from "types/ItemCustomTagPorps";

export interface SellersProps {
  Id: number | string;
  Name: string;
  Quantity: number;
  Price: number;
  ListPrice: number;
  BestInstallment: {
    Count: number;
    Value: number;
    Total: number;
    Rate: number;
    InterestRate: number;
    InstallmentLabelProductCard: string;
    InstallmentLabelProductPage: string;
    InstallmentLabelAddProductModal: string;
    InstallmentLabelPurchaseCondition: null | any;
    DeadLines: null | any;
  };
  DefaultSeller: boolean;
  SpecialPrice: null | any;
  Teasers: any[];
}

export interface Images {
  ImageUrl: string;
  ImageTag: string;
  Label: string;
}

export interface SkusProps {
  Id: number | string;
  Name: string;
  Order: number;
  Sellers: SellersProps[];
  Images: Images[];
  // Variations: { Cor: string[]; Tamanho: string[] };
  Variations: any; //Tive q colocar any por que "Cor" e "Tamanho" podem vir escritos de maneiras diferentes, ex: "COR" ou "TAMANHO"
  SkuName: string;
  ComplementName: string;
  ReferenceId: { Key: string; Value: string }[];
  EAN: string;
  UnitMultiplier: number;
  MeasurementUnit: string;
  Measurement: null | any;
  MeasurementPrice: number;
  IsKit: boolean;
  IsKitLook: boolean;
  KitItems: any[];
  RefId: null | any;
}

export interface RatingResumeProps {
  Average: number;
  Count: number;
  ProductCode: string;
}

export interface ProductProps {
  Availability: true;
  Skus: SkusProps[];
  Name: string;
  Id: string;
  Brand: string;
  Description: string;
  Category: string;
  Categories: string[];
  Specifications: any;
  SpecificationsApp: any;
  Variations: string[];
  Videos: null | any;
  Images: null | any;
  RealId: string;
  Collection: null | ItemCustomTagProps[];
  OrderedVarations: any[];
  OrderedSpecification: {
    Name: string;
    Order: number;
    Active: boolean;
    Type: number;
    HorizontalScroll: boolean;
    Value: string;
  }[];
  ExtendedWarranty: null | any;
  Attachments: null | any;
  ProductReference: string;
  SellsOnlyMultiples: boolean;
  SellingMultiple: number;
  Subscription: null | any;
  RetailStoreOnly: boolean;
  ClusterHighlights: any;
  RatingResume: null | RatingResumeProps;
  ImageColorsPerVariation: null | any;
  ConditionScale: number;
}
