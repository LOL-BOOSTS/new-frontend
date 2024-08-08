import { configureStore } from "@reduxjs/toolkit";
import boostSlice from "../slice/boostSlice";
import lolSlice from "../slice/game/lolSlice";
import valorantSlice from "../slice/game/valorantSlice";
import globalSlice from "../slice/globalSlice";
import tftSlice from "../slice/game/tftSlice";

export default configureStore({
  reducer: {
    global: globalSlice,
    boost: boostSlice,
    lol: lolSlice,
    valorant: valorantSlice,
    tft: tftSlice,
  },
});
