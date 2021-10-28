import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "photos",
  initialState: [],
  reducers: {
    photosRequest: (photos, action) => {},
  },
});

export const photosReducer = slice.reducer;
