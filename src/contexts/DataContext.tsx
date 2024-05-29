import React, { createContext, useContext, ReactNode } from "react";
import { DataContextProps } from "../types/types";
import useFetchData from "../hooks/useFetchData";

const DataContext = createContext<DataContextProps>({
  programs: null,
  loading: true,
  error: null,
});

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { data: programs, loading, error } = useFetchData("/data/data.json");

  return (
    <DataContext.Provider value={{ programs, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
