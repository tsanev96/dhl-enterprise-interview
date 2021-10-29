import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectFavouritePhotos } from "../store/photos";
import { CardPhoto } from "./CardPhoto";
import { GoBackButton } from "./common/GoBackButton";

export const FavouritePhotos = () => {
  const favouritePhotos = useSelector(selectFavouritePhotos());
  return (
    <>
      <GoBackButton />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h3>Favourite Photos</h3>
        <div className="photos-fav-container">
          {favouritePhotos.map((photo) => (
            <CardPhoto key={photo.id} photo={photo} />
          ))}
        </div>
      </Grid>
    </>
  );
};
