import { configureStore } from "@reduxjs/toolkit";
import SideNavSlice from "./sideNavSlice";
export const store = configureStore({
  reducer: {
    SideNavSlice,
  },
});
