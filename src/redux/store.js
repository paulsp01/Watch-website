import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlistSlice";

const loadWishlist = () => {
  try {
    const saved = localStorage.getItem("maison-elysee-wishlist");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
  preloadedState: {
    wishlist: {
      items: typeof window === "undefined" ? [] : loadWishlist(),
    },
  },
});

if (typeof window !== "undefined") {
  store.subscribe(() => {
    try {
      localStorage.setItem(
        "maison-elysee-wishlist",
        JSON.stringify(store.getState().wishlist.items)
      );
    } catch {
      // The app remains usable if browser storage is unavailable.
    }
  });
}
