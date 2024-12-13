import React, { createContext, useState, ReactNode } from "react";
import { ProductProps } from "types/ProductProps";

interface CartProps {
  productsInCart: ProductProps[];
  setProductsInCart: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

const CartContext = createContext<CartProps>({
  productsInCart: [],
  setProductsInCart: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function CartProvider({ children }: ContextProps) {
  const [productsInCart, setProductsInCart] = useState<ProductProps[]>([]);

  return (
    <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
