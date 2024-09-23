export interface Banner {
  BannerListOrder: number;
  Clicks: number;
  Filter: any;
  Height: number;
  Id: number;
  Image: string;
  Name: string;
  Redirect: any;
  Width: number;
}

export interface CarouselBrand {
  Banners: Banner[];
  Id: number;
  Title: string;
  TransitionDelay: number;
}
