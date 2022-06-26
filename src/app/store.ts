import { configureStore } from "@reduxjs/toolkit";
import  reducer  from "../features/rootSlice";

export const store = configureStore({
  reducer: {
    orders: reducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch