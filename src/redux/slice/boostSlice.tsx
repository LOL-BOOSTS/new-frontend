import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  current_rank: {
    material: null,
    rank: null,
    current_lp: 0,
  },
  desired_rank: {
    material: null,
    rank: null,
  },
  win_match: 3,
  placement_match: 3,
};

// Then, handle actions in your reducers:
const boostSlice = createSlice({
  name: "boost",
  initialState,
  reducers: {
    setCurrentMaterial: (state: any, action: PayloadAction<any>) => {
      state.current_rank = {
        ...state.current_rank,
        material: action.payload,
      };
    },
    setCurrentRank: (state: any, action: PayloadAction<any>) => {
      state.current_rank = {
        ...state.current_rank,
        rank: action.payload,
      };
    },
    setDesiredMaterial: (state: any, action: PayloadAction<any>) => {
      state.desired_rank = {
        ...state.desired_rank,
        material: action.payload,
      };
    },
    setDesiredRank: (state: any, action: PayloadAction<any>) => {
      state.desired_rank = {
        ...state.desired_rank,
        rank: action.payload,
      };
    },
    setWinMatch: (state: any, action: PayloadAction<any>) => {
      state.win_match = action.payload;
    },
    setPlacementMatch: (state: any, action: PayloadAction<any>) => {
      state.placement_match = action.payload;
    },
    setCurrentLP: (state: any, action: PayloadAction<any>) => {
      state.current_rank.current_lp = action.payload;
    },
  },
});

export const {
  setCurrentMaterial,
  setCurrentRank,
  setDesiredMaterial,
  setDesiredRank,
  setWinMatch,
  setPlacementMatch,
  setCurrentLP,
} = boostSlice.actions;

export default boostSlice.reducer;
