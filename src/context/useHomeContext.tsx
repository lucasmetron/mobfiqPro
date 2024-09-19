import React, { createContext, useState, ReactNode } from "react";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";

interface DataHomeProps {
  dataHome: ModuleHomeSaveOnBackProps[];
  setDataHome: React.Dispatch<
    React.SetStateAction<ModuleHomeSaveOnBackProps[]>
  >;
}

const DataHomeContext = createContext<DataHomeProps>({
  dataHome: [],
  setDataHome: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function DataHomeProvider({ children }: ContextProps) {
  const [dataHome, setDataHome] = useState<ModuleHomeSaveOnBackProps[]>([]);

  return (
    <DataHomeContext.Provider value={{ dataHome, setDataHome }}>
      {children}
    </DataHomeContext.Provider>
  );
}

export default DataHomeContext;
