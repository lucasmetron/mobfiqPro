import { RGBAProps } from "types/RGBAProps";

export interface MenuProps {
  BackgroundColor: RGBAProps;
  Icon: string;
  Name: string;
  Order: number;
  Redirect: {
    Id: number;
    SearchCriteria: any;
    Title: any;
    Type: number;
    ContentUrl: any;
    CustomPageId: any;
    ReferenceId: any;
    CategoryId: any;
  };
  TabOrder: number;
}

export interface Section {
  Icon: any;
  Items: MenuProps[];
  Order: number;
  Redirect: any;
  Title: string;
  Type: number;
}

export interface MenuObjFromBack {
  Sections: Section[];
  TabBar: MenuProps[];
}
