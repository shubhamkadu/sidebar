import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openSidebar = () => {
    setSideBarOpen(true);
  };
  const closeSidebar = () => {
    setSideBarOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        sideBarOpen,
        modalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
