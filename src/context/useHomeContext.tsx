import React, { createContext, useState, ReactNode } from "react";
import { ModuleHomeSaveOnBackProps } from "types/ModuleHomeSaveOnBackProps";

interface DataHomeProps {
  dataHome: ModuleHomeSaveOnBackProps[];
  setDataHome: React.Dispatch<
    React.SetStateAction<ModuleHomeSaveOnBackProps[]>
  >;
  isLoadData: boolean;
  setIsLoadData: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataHomeContext = createContext<DataHomeProps>({
  dataHome: [],
  setDataHome: () => {},
  isLoadData: false,
  setIsLoadData: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function DataHomeProvider({ children }: ContextProps) {
  const [dataHome, setDataHome] = useState<ModuleHomeSaveOnBackProps[]>([]);
  const [isLoadData, setIsLoadData] = useState(false);

  return (
    <DataHomeContext.Provider
      value={{ dataHome, setDataHome, isLoadData, setIsLoadData }}
    >
      {children}
    </DataHomeContext.Provider>
  );
}

export default DataHomeContext;
