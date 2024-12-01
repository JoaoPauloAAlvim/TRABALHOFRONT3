import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import PlaylistsList from "../Components/PlaylistList";
import SearchPlaylists from "../Components/SearchPlaylist";

const Playlist = () => {
  useProtectedPage();

  return (
    <div>
      <SearchPlaylists/>
      <PlaylistsList />
    </div>
  );
};

export default Playlist;
