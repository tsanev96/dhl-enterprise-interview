import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos, selectAlbums, selectPhotos } from "../store/photos";

export const Albums = () => {
  const dispatch = useDispatch();

  const albumIds = useSelector(selectAlbums());
  useEffect(() => {
    dispatch(loadPhotos());
  }, []);
  return (
    <div>
      {albumIds.map((id) => (
        <div key={id}>{id}</div>
      ))}
    </div>
  );
};
