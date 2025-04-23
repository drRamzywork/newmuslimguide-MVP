import { createContext, useContext, useState } from "react";

// Create a context for menu
const MenuContext = createContext();

// Create a provider component
export const MenuProvider = ({ children }) => {
  const [menulang, setMenuLang] = useState(false);
  const [searchMenu, setSearchMenu] = useState(false);
  const [topicsMenu, setTopicsMenu] = useState(false);
  const [booksMenu, setBooksMenu] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        menulang,
        setMenuLang,
        searchMenu,
        setSearchMenu,
        topicsMenu,
        setTopicsMenu,
        booksMenu,
        setBooksMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

// Custom hook to use the MenuContext
export const useMenu = () => {
  return useContext(MenuContext);
};
