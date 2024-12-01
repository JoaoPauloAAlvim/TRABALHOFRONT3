import React from "react";
import AddSongToPlaylist from "../Components/AddSongToPlaylist";
import { useParams } from "react-router-dom";
import PlaylistTracks from "../Components/PlaylistTracks";
import { useCoordinator } from "../hooks/useCoordinator";
import { Button } from "../style";


const PlaylistPage = () => {
  const { playlistId } = useParams();
  const{goToMySongs}= useCoordinator()
  return (
    <div>
      <h1>Gerenciar Playlist</h1>
      <PlaylistTracks playlistId={playlistId} />
      <AddSongToPlaylist playlistId={playlistId} />
      <Button onClick={()=>goToMySongs()}>Ver minhas músicas</Button>
    </div>
  );
};

export default PlaylistPage;
