import { configureStore } from "@reduxjs/toolkit";
import { appSliceReducer } from "./slices/app-slice";

export const store = configureStore({
  reducer: {
    app: appSliceReducer,
  },
});
