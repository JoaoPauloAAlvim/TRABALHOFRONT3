import React from "react";
import { LoadingGif, PlaylistItem } from "../style"; 
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";
import { useRequestData } from "../hooks/useRequestData";
import URL_BASE from "../Constants/URL_BASE";

const PlaylistsList = () => {
  const [playlists, loading, error] = useRequestData(`${URL_BASE}/playlist`);  

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
        {Array.isArray(playlists) && playlists.length > 0 ? (
          playlists.map((playlist) => (
            <PlaylistItem key={playlist.id}>
              <h3>{playlist.name}</h3>
              <p>{playlist.description}</p>
            </PlaylistItem>
          ))
        ) : (
          <div>Você não tem playlists.</div>  
        )}
      </ul>
    </div>
  );
};

export default PlaylistsList;
