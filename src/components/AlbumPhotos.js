import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadPhotos, selectAlbums } from "../store/photos";

export const AlbumPhotos = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const albums = useSelector(selectAlbums());

  const paramsAlbumId = Number(params.id);

  const currentAlbumIndex = albums.findIndex(
    (album) => album.id === paramsAlbumId
  );
  const photos = currentAlbumIndex >= 0 ? albums[currentAlbumIndex].photos : [];
  console.log(photos);
  useEffect(() => {
    dispatch(loadPhotos());
  }, []);

  return (
    <>
      {photos.length ? (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div>Album: {paramsAlbumId}</div>
          <>
            {photos.map((photo) => (
              // <img key={photo.id} src={photo.url} alt={photo.id} />
              <Card key={photo.id} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={photo.url}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {photo.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    fav
                  </Button>
                </CardActions>
              </Card>
            ))}
          </>
        </Grid>
      ) : (
        <div>This album does not exist</div>
      )}
    </>
  );
};
