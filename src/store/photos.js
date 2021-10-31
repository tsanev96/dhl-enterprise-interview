import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { createSelector } from "reselect";
import moment from "moment";

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
      photos.list = action.payload.map((el) => ({ ...el, isLiked: false }));
      photos.loading = false;
      photos.lastFetch = Date.now();
    },
    photosRequestedFailed: (photos, action) => {
      photos.loading = false;
    },
    photosToggleLiked: (photos, action) => {
      const index = photos.list.findIndex(
        (photo) => photo.id === action.payload.id
      );
      if (index >= 0) {
        const isLiked = photos.list[index].isLiked;
        photos.list[index].isLiked = !isLiked;
      }
    },
  },
});

const {
  photosReceived,
  photosRequested,
  photosRequestedFailed,
  photosToggleLiked: photosAddFavourite,
} = slice.actions;

export const photosReducer = slice.reducer;

export const loadPhotos = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.photos;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffInMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url,
      onStart: photosRequested.type,
      onSuccess: photosReceived.type,
      onFail: photosRequestedFailed.type,
    })
  );
};

/* Action Creators */
export const addFavouritePhoto = (photoId) => (dispatch, getState) => {
  dispatch(
    photosAddFavourite({
      id: photoId,
    })
  );
};

/*  Selectors */
export const selectPhotos = () =>
  createSelector(
    (state) => state.entities.photos,
    (photos) => photos.list
  );

export const selectAlbums = () =>
  createSelector(
    (state) => state.entities.photos.list,
    (photos) => {
      const albumIds = [];
      for (let i = 0; i < photos.length; i++) {
        const albumId = photos[i].albumId;
        if (!albumIds.includes(albumId)) albumIds.push(albumId);
      }

      const albums = albumIds.map((id) => ({
        id,
        photos: [],
      }));

      for (let i = 0; i < photos.length; i++) {
        const albumIndex = albums.findIndex(
          (album) => album.id === photos[i].albumId
        );

        albums[albumIndex].photos.push(photos[i]);
      }
      return albums;
    }
  );

export const selectPhotosByAlbum = (albumId) =>
  createSelector(
    (state) => state.entities.photos.list,
    (photos) => photos.filter((photo) => photo.albumId === albumId)
  );

export const selectFavouritePhotos = () =>
  createSelector(
    (state) => state.entities.photos.list,
    (photos) => photos.filter((photo) => photo.isLiked)
  );
