import { createSlice } from "@reduxjs/toolkit";

export const navNavSlice = createSlice({
  name: "Side Nav",
  initialState: {
    isSideNavVisible: false,
  },
  reducers: {
    setSideNavState: (state) => {
      state.isSideNavVisible = !state.isSideNavVisible;
    },
  },
});
export const { setSideNavState } = navNavSlice.actions;
export default navNavSlice.reducer;
