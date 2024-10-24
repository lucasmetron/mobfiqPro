import React, { createContext, useState, ReactNode } from "react";
import { ProductProps } from "types/ProductProps";
interface FavoritesContextProps {
  favorites: ProductProps[];
  setFavorites: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

const FavoritesContext = createContext<FavoritesContextProps>({
  favorites: [],
  setFavorites: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function FavoritesProvider({ children }: ContextProps) {
  const [favorites, setFavorites] = useState<ProductProps[]>([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
