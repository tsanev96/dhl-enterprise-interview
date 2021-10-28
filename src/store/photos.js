import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { createSelector } from "reselect";

const url = "/photos";

const slice = createSlice({
  name: "photos",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    photosRequested: (photos, action) => {
      photos.loading = true;
    },
    photosReceived: (photos, action) => {
      photos.list = action.payload;
      photos.loading = false;
    },
    photosRequestedFailed: (photos, action) => {
      photos.loading = false;
    },
  },
});

const { photosReceived, photosRequested, photosRequestedFailed } =
  slice.actions;

export const photosReducer = slice.reducer;

export const loadPhotos = () => (dispatch, getState) =>
  dispatch(
    apiCallBegan({
      url,
      onStart: photosRequested.type,
      onSuccess: photosReceived.type,
      onFail: photosRequestedFailed.type,
    })
  );

export const selectPhotos = () =>
  createSelector(
    (state) => state.entities.photos,
    (photos) => photos.list
  );

export const selectAlbums = () =>
  createSelector(
    (state) => state.entities.photos.list,
    (photos) => {
      let albums = [];
      for (let i = 0; i < photos.length; i++) {
        const albumId = photos[i].albumId;
        if (!albums.includes(albumId)) albums.push(albumId);
      }
      return albums;
    }
  );
