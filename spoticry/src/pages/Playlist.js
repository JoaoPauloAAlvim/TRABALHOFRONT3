import React from "react";
import AddSongToPlaylist from "../Components/AddSongToPlaylist";
import { useParams } from "react-router-dom";
import PlaylistTracks from "../Components/PlaylistTracks";
const PlaylistPage = () => {
  const { playlistId } = useParams();
  return (
    <div>
      <h1>Gerenciar Playlist</h1>
      <PlaylistTracks playlistId={playlistId} />
      <AddSongToPlaylist playlistId={playlistId} />
    </div>
  );
};

export default PlaylistPage;
