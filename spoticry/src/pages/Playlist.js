import React, { useState } from "react";
import AddSongToPlaylist from "../Components/AddSongToPlaylist";
import { useParams } from "react-router-dom";
import PlaylistTracks from "../Components/PlaylistTracks";
import { useCoordinator } from "../hooks/useCoordinator";
import { SecondaryButton } from "../style";

const PlaylistPage = () => {
  const { playlistId } = useParams();
  const { goToMySongs } = useCoordinator();
  const [tracks, setTracks] = useState([]); 

  const handleSongAdded = (newSong) => {
    setTracks((prevTracks) => [...prevTracks, newSong]); 
  };

  return (
    <div>
      <PlaylistTracks playlistId={playlistId} tracks={tracks} setTracks={setTracks} />
      <AddSongToPlaylist playlistId={playlistId} onSongAdded={handleSongAdded} />
      <SecondaryButton onClick={() => goToMySongs()}>Ver minhas músicas</SecondaryButton>
    </div>
  );
};

export default PlaylistPage;
