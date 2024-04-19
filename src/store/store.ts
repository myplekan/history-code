import { configureStore } from "@reduxjs/toolkit";
import likedSlice from "../features/liked/likedSlice";

export const store = configureStore({
  reducer: {
    liked: likedSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
