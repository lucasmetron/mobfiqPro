import React, { createContext, useState, ReactNode } from "react";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";

interface HeaderDefaultProps {
  nameRouter: string;
  setNameRouter: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderDefaultContext = createContext<HeaderDefaultProps>({
  nameRouter: "",
  setNameRouter: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function HeaderDefaultProvider({ children }: ContextProps) {
  const [nameRouter, setNameRouter] = useState("");

  return (
    <HeaderDefaultContext.Provider value={{ nameRouter, setNameRouter }}>
      {children}
    </HeaderDefaultContext.Provider>
  );
}

export default HeaderDefaultContext;
