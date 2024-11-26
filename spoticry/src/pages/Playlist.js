import React from "react";
import AddSongToPlaylist from "../Components/AddSongToPlaylist";
import { useParams } from "react-router-dom";

const PlaylistPage = () => {
const {id} = useParams()
  return (
    <div>
      <h1>Gerenciar Playlist</h1>

      <AddSongToPlaylist selectedPlaylistId={id} />
    </div>
  );
};

export default PlaylistPage;
