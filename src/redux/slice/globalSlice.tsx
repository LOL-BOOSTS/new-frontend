import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loginModal: false,
  game: null,
};

// Then, handle actions in your reducers:
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoginModal: (state: any, action: PayloadAction<any>) => {
      state.loginModal = action.payload;
    },
    setGame: (state: any, action: PayloadAction<any>) => {
      state.game = action.payload;
    },
  },
});

export const { setLoginModal, setGame } = globalSlice.actions;

export default globalSlice.reducer;
