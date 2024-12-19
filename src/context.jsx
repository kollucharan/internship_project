import React, { createContext, useContext, useState } from "react";

// Create Context
const SearchContext = createContext();

// Create Provider
export const SearchProvider = ({ children }) => {
  const [searchvalue, Setsearchvalue] = useState("");

  return (
    <SearchContext.Provider value={{ searchvalue, Setsearchvalue }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the context
export const useSearch = () => useContext(SearchContext);
