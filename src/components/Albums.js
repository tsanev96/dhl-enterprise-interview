import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos, selectAlbums } from "../store/photos";
import { Link } from "react-router-dom";

export const Albums = () => {
  const dispatch = useDispatch();

  const albums = useSelector(selectAlbums());

  useEffect(() => {
    dispatch(loadPhotos());
  });

  return (
    <Grid container spacing={2}>
      {albums.map((album) => (
        <Grid key={album.id} item xs={4}>
          <Button
            component={Link}
            to={`/albums/${album.id}`}
            variant="contained"
          >
            Album: {album.id}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
