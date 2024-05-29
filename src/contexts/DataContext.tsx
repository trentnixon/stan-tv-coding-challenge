import React, { createContext, useContext, ReactNode } from 'react';
import { Program } from '../types';
import useFetchData from '../hooks/useFetchData';

interface DataContextProps {
  programs: Program[] | null;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextProps>({
  programs: null,
  loading: true,
  error: null
});

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { data: programs, loading, error } = useFetchData('/data/data.json');

  return (
    <DataContext.Provider value={{ programs, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
