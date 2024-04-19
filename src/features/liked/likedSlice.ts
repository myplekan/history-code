import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { History } from "../../types/history";
import { Culture } from "../../types/culture";

interface LikedState {
  liked: (History | Culture)[];
}

const getLikedFromLocalStorage = (): LikedState | null => {
  const likedString = localStorage.getItem("liked");
  return likedString ? JSON.parse(likedString) : null;
};

const saveLikedToLocalStorage = (liked: LikedState) => {
  localStorage.setItem("liked", JSON.stringify(liked));
};

const initialState: LikedState = getLikedFromLocalStorage() || {
  liked: [],
};

export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<LikedState>) => {
      state.liked = [...state.liked, ...action.payload.liked];
      saveLikedToLocalStorage(state);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.liked = state.liked.filter((item) => item.name !== action.payload);
      saveLikedToLocalStorage(state);
    },
  },
});

export const { add, remove } = likedSlice.actions;

export default likedSlice.reducer;
