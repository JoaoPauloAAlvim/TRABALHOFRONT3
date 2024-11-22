import React from "react";
import { usePlaylistsById } from "../hooks/usePlaylistsById";
import { LoadingGif, PlaylistItem } from "../style"; 
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";

const PlaylistsList = () => {
  const { playlists, loading, error } = usePlaylistsById();

  if (loading) {
    return <LoadingGif src={loadingGif} alt="Carregando playlists..." />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (playlists.length === 0) {
    return <div>Você não tem playlists.</div>;
  }

  return (
    <div>
      <h2>Playlists</h2>
      <ul>
        {playlists && playlists.map((playlist) => (
          <PlaylistItem key={playlist.id}>
            <h3>{playlist.name}</h3>
            <p>{playlist.description}</p>
          </PlaylistItem>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistsList;
