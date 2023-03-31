import { createContext, useContext, useState } from "react";

import { toast } from "react-toastify";

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

  const showToast = (message) => {
    toast(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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
    showToast,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
