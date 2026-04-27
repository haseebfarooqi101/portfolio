import { createSlice } from "@reduxjs/toolkit";

interface NavState {
  isOpen: boolean;
}

const initialState: NavState = {
  isOpen: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleNav(state) {
      state.isOpen = !state.isOpen;
    },
    closeNav(state) {
      state.isOpen = false;
    },
  },
});

export const { toggleNav, closeNav } = navSlice.actions;
export default navSlice.reducer;
