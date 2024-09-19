interface FilterProps {
  Brands: null;
  Category: string;
  Collection: null | any;
  Sku: null | any;
  Skus: null | any;
  Specifications: null | any;
  SubCategory: null | any;
}

export interface CategorieProps {
  Id: number;
  Name: string | null;
  Image: string | null;
  Redirect: {
    Id: number | null;
    SearchCriteria: {
      Query: null | string;
      OrderBy: number | null;
      Size: number | null;
      Offset: number | null;
      Filter: FilterProps | null;
      ApiQuery: string | null;
      BrandId: null | number;
      EAN: null | any;
      FacetItems: null | any;
      HideUndesiredProducts: boolean;
      Hotsite: null | string;
      IsAutoComplete: boolean;
      IsRecommendation: boolean;
      Placement: null | any;
      ProductId: null | number;
      RealProductId: null | number;
      RealProductIdGroup: null | number;
      RecommendationProductID: null | number;
      ReferencId: null | number;
      ReferencIdGroup: null | number;
      SearchApi: string | null;
      TotalResult: number;
    };
    CategoryId: number | null;
    ContentUrl: string | null;
    CustomPageId: number | null;
    ReferenceId: number | null;
    Title: string;
    Type: number;
  };
  CategoryListOrder: number | null;
  CategoryTreeOrder: number | null;
  Hide: boolean;
  Highlight: boolean;
  Icon: string | null;
  IconColor: string | null;
  IsTitle: boolean;
  LinkId: number;
  SubCategories: null | CategorieProps[]; // d novo a mesma coisa
  isSelected?: boolean; // usado no front para algumas lógicas, não é nativa no backend
}

// LEGENDAS (DOCUMENTAÇÃO)
// os objetos abaixo são as legendas nos enuns do back end
// EX: 5 = OnSale
export let orderBy: {
  None: 0;
  TopSale: 1;
  ReleaseDate: 2;
  HigherPrice: 3;
  LowerPrice: 4;
  OnSale: 5;
  ReviewRate: 6;
  NameAsc: 7;
  NameDesc: 8;
  PositionAsc: 9;
  WtenisPositionDesc: 10;
  WtenisPositionAsc: 11;
  PositionDesc: 12;
  Relevance: 13;
  OrderByScoreAsc: 14;
  OrderByScoreDesc: 15;
};
