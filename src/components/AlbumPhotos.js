import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadPhotos, selectAlbums } from "../store/photos";
import { CardPhoto } from "./CardPhoto";
import { GoBackButton } from "./common/GoBackButton";

export const AlbumPhotos = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const albums = useSelector(selectAlbums());

  const paramsAlbumId = Number(params.id);

  const currentAlbumIndex = albums.findIndex(
    (album) => album.id === paramsAlbumId
  );
  const photos = currentAlbumIndex >= 0 ? albums[currentAlbumIndex].photos : [];

  useEffect(() => {
    dispatch(loadPhotos());
  });

  return (
    <>
      <GoBackButton />
      {photos.length ? (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div>Album: {paramsAlbumId}</div>
          <div className="photos-container">
            {photos.map((photo) => (
              <CardPhoto key={photo.id} photo={photo} />
            ))}
          </div>
        </Grid>
      ) : (
        <div>This album does not exist</div>
      )}
    </>
  );
};
