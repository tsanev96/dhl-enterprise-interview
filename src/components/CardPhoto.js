import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addFavouritePhoto } from "../store/photos";

export const CardPhoto = ({ photo }) => {
  const dispatch = useDispatch();

  const handleAddFavouritePhoto = (photoId) =>
    dispatch(addFavouritePhoto(photoId));

  return (
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
            PhotoID: {photo.id}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Title: {photo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => handleAddFavouritePhoto(photo.id)}
          size="small"
          color="primary"
        >
          fav
        </Button>
        {photo.isLiked && "liked"}
      </CardActions>
    </Card>
  );
};
