import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapperContext({ children }) {
  const [isShowNavbar, setIsShowNavbar] = useState(false);

  const [activeCard, setActiveCard] = useState("");

  const toggleShowNavbar = () => {
    setIsShowNavbar((prevState) => !prevState);
  };

  const handleSetActiveCard = (value) => {
    setActiveCard(value);
  };

  let state = {
    navbar: {
      isShowNavbar: isShowNavbar,
      toggleShowNavbar,
    },
    card: {
      activeCard,
      handleSetActiveCard,
    },
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
