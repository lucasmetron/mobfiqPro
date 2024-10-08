import React, { createContext, useState, ReactNode } from "react";
import { ProductProps } from "types/ProductProps";

interface ProductSelectedProps {
  productSelected: ProductProps | null;
  setProductSelected: React.Dispatch<React.SetStateAction<ProductProps | null>>;
}

const ProductSelectedContext = createContext<ProductSelectedProps>({
  productSelected: null,
  setProductSelected: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function ProductSelectedProvider({ children }: ContextProps) {
  const [productSelected, setProductSelected] = useState<null | ProductProps>(
    null
  );

  return (
    <ProductSelectedContext.Provider
      value={{ productSelected, setProductSelected }}
    >
      {children}
    </ProductSelectedContext.Provider>
  );
}

export default ProductSelectedContext;
