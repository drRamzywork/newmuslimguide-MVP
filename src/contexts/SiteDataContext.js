import { createContext, useContext } from "react";

const SiteDataContext = createContext();

export function SiteDataProvider({ children, value }) {
  return (
    <SiteDataContext.Provider value={value}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SiteDataContext);
}
