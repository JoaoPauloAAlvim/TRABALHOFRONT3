import React from "react";
import AddSongToPlaylist from "../Components/AddSongToPlaylist";
import { useParams } from "react-router-dom";
import PlaylistTracks from "../Components/PlaylistTracks";
import { useCoordinator } from "../hooks/useCoordinator";


const PlaylistPage = () => {
  const { playlistId } = useParams();
  const{goToMySongs}= useCoordinator()
  return (
    <div>
      <h1>Gerenciar Playlist</h1>
      <PlaylistTracks playlistId={playlistId} />
      <AddSongToPlaylist playlistId={playlistId} />
      <button onClick={()=>goToMySongs()}>Ver minhas músicas</button>
    </div>
  );
};

export default PlaylistPage;
