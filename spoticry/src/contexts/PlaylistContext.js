import React, { createContext, useState, useContext } from "react";

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);

  const updatePlaylists = (newPlaylists) => {
    setPlaylists(newPlaylists);
  };

  return (
    <PlaylistContext.Provider value={{ playlists, updatePlaylists }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylistContext = () => {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error("usePlaylistContext must be used within a PlaylistProvider");
  }
  return context;
};
