import React, { createContext, useState, ReactNode } from "react";
import { ProductProps } from "types/ProductProps";

interface ProductsListProps {
  productsList: ProductProps[];
  setProductsList: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  isLoadProducts: boolean;
  setIsLoadProducts: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductsListContext = createContext<ProductsListProps>({
  productsList: [],
  setProductsList: () => {},
  isLoadProducts: false,
  setIsLoadProducts: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function ProductsListProvider({ children }: ContextProps) {
  const [productsList, setProductsList] = useState<ProductProps[]>([]);
  const [isLoadProducts, setIsLoadProducts] = useState(false);

  return (
    <ProductsListContext.Provider
      value={{
        productsList,
        setProductsList,
        isLoadProducts,
        setIsLoadProducts,
      }}
    >
      {children}
    </ProductsListContext.Provider>
  );
}

export default ProductsListContext;
