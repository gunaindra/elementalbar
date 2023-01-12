import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapperContext({ children }) {
  const [isShowNavbar, setIsShowNavbar] = useState(false);

  const toggleShowNavbar = () => {
    setIsShowNavbar((prevState) => !prevState);
  };

  let state = {
    navbar: {
      isShowNavbar: isShowNavbar,
      toggleShowNavbar,
    },
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
