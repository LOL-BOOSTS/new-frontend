import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  current_rank: {
    rank: null,
    division: null,
    lp: 0,
    current_lp: null,
    current_lp_gain: null,
    server: null,
    agents: [],
  },
  desired_rank: {
    rank: null,
    division: null,
  },
  win_match: 3,
  placement_match: 3,
};

// Then, handle actions in your reducers:
const tftSlice = createSlice({
  name: "lol",
  initialState,
  reducers: {
    setCurrentRank: (state: any, action: PayloadAction<any>) => {
      state.current_rank = {
        ...state.current_rank,
        rank: action.payload,
      };
      console.log(state.current_rank);
    },
    setCurrentDivision: (state: any, action: PayloadAction<any>) => {
      state.current_rank = {
        ...state.current_rank,
        division: action.payload,
      };
    },
    setDesiredRank: (state: any, action: PayloadAction<any>) => {
      state.desired_rank = {
        ...state.desired_rank,
        rank: action.payload,
      };
    },
    setDesiredDivision: (state: any, action: PayloadAction<any>) => {
      state.desired_rank = {
        ...state.desired_rank,
        division: action.payload,
      };
    },
    setWinMatch: (state: any, action: PayloadAction<any>) => {
      state.win_match = action.payload;
    },
    setPlacementMatch: (state: any, action: PayloadAction<any>) => {
      state.placement_match = action.payload;
    },
    setLP: (state: any, action: PayloadAction<any>) => {
      state.current_rank.lp = action.payload;
    },
    setCurrentLP: (state: any, action: PayloadAction<any>) => {
      state.current_rank.current_lp = action.payload;
    },
    setCurrentLPGain: (state: any, action: PayloadAction<any>) => {
      state.current_rank.current_lp_gain = action.payload;
    },
    setServer: (state: any, action: PayloadAction<any>) => {
      state.current_rank.server = action.payload;
    },
    setAgents: (state: any, action: PayloadAction<any>) => {
      state.current_rank.agents = action.payload;
    },
  },
});

export const {
  setCurrentRank,
  setCurrentDivision,
  setDesiredRank,
  setDesiredDivision,
  setWinMatch,
  setPlacementMatch,
  setLP,
  setCurrentLP,
  setCurrentLPGain,
  setServer,
  setAgents,
} = tftSlice.actions;

export default tftSlice.reducer;
