import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadPhotos, selectAlbums } from "../store/photos";

export const AlbumPhotos = () => {
  const dispatch = useDispatch();

  const albums = useSelector(selectAlbums());

  const params = useParams();
  const albumId = Number(params.id);

  const currentAlbumId = albums.findIndex((album) => album.id === albumId);
  const photos = albums[currentAlbumId].photos;

  useEffect(() => {
    dispatch(loadPhotos());
  }, []);
  return (
    <div>
      {currentAlbumId >= 0 ? (
        <>
          <div>Album: {currentAlbumId}</div>
          <div>
            {photos.map((photo) => (
              <img key={photo.id} src={photo.url} alt={photo.id} />
            ))}
          </div>
        </>
      ) : (
        <div>not existing album</div>
      )}
    </div>
  );
};
