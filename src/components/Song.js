import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";

function Song({ track_name, artist, preview_url, image_url, album_name }) {
  return (
    <div className="d-flex flex-column song">
      <div className="album_image_wrapper">
        <img src={image_url} alt="album_cover" />
      </div>
      <div className="song_info">
        <h1>{`${track_name} - ${artist}`}</h1>
        <h2>{album_name}</h2>
      </div>
      <AudioPlayer
        src={preview_url}
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          marginTop: "auto",
        }}
      />
    </div>
  );
}

export default Song;
