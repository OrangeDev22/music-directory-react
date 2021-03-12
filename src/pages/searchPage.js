import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Song from "../components/Song";
import axios from "../axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const query = useQuery();
  const search = query.get("name");
  const [songs, setSongs] = useState([]);
  const { access_token } = useSelector((state) => state.app);

  useEffect(() => {
    axios
      .get("/v1/search", {
        headers: { Authorization: "Bearer " + access_token },
        params: {
          q: search,
          type: "track,artist",
          market: "US",
          limit: 20,
        },
      })
      .then((response) => {
        setSongs(response.data.tracks.items);
      })
      .catch((error) => console.log(error));
    return () => {
      setSongs([]);
    };
  }, [search]);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "8px 0" }}>
        Results for: {`'${search}'`}
      </h1>
      <div className="songs">
        {songs &&
          songs.map((song, index) => (
            <Song
              key={index}
              image_url={song.album.images[0].url}
              track_name={song.name}
              artist={song.artists[0].name}
              album_name={song.album.name}
              preview_url={song.preview_url}
            ></Song>
          ))}
      </div>
    </div>
  );
}

export default SearchPage;
