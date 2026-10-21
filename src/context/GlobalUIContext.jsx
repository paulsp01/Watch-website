import { createContext, useContext, useState } from "react";

const GlobalUIContext = createContext(null);

export function GlobalUIProvider({ children }) {
  const [activePanel, setActivePanel] = useState(null);
  const [inquiry, setInquiry] = useState("General enquiry");

  const openInquiry = (subject = "General enquiry") => {
    setInquiry(subject);
    setActivePanel("inquiry");
  };

  const openWishlist = () => setActivePanel("wishlist");
  const closePanel = () => setActivePanel(null);

  return (
    <GlobalUIContext.Provider
      value={{
        activePanel,
        inquiry,
        openInquiry,
        openWishlist,
        closePanel,
      }}
    >
      {children}
    </GlobalUIContext.Provider>
  );
}

export function useGlobalUI() {
  const context = useContext(GlobalUIContext);

  if (!context) {
    throw new Error("useGlobalUI must be used inside GlobalUIProvider");
  }

  return context;
}
