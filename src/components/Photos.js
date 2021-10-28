import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos, selectPhotos } from "../store/photos";

export const Photos = () => {
  const dispatch = useDispatch();

  const photos = useSelector(selectPhotos());
  console.log(photos);
  useEffect(() => {
    dispatch(loadPhotos());
  }, []);
  return <div>photos</div>;
};
