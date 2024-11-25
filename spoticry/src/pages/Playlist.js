import React, { useState } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import PlaylistsList from "../Components/PlaylistList";

const Playlist = () => {
  useProtectedPage();

  return (
    <div>
      <PlaylistsList />
    </div>
  );
};

export default Playlist;
