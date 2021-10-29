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

  useEffect(() => {
    dispatch(loadPhotos());
  }, []);

  return (
    <div>
      {photos.length ? (
        <>
          <div>Album: {paramsAlbumId}</div>
          <div>
            {photos.map((photo) => (
              <img key={photo.id} src={photo.url} alt={photo.id} />
            ))}
          </div>
        </>
      ) : (
        <div>This album does not exist</div>
      )}
    </div>
  );
};
