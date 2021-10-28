import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos, selectAlbumIds } from "../store/photos";

export const Albums = () => {
  const dispatch = useDispatch();

  const albumIds = useSelector(selectAlbumIds());

  useEffect(() => {
    dispatch(loadPhotos());
  }, []);
  return (
    <Grid container spacing={2}>
      {albumIds.map((id) => (
        <Grid key={id} item xs={4}>
          <Button variant="contained">Album: {id}</Button>
        </Grid>
      ))}
    </Grid>
  );
};
