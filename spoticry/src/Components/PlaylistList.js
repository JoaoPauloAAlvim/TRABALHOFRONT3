import React, { useState } from "react";
import CreatePlaylistModal from "./CreatePlaylistModal";
import { usePlaylistContext } from "../contexts/PlaylistContext";
import { LoadingGif, PlaylistItem } from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";
import { usePlaylistsById } from "../hooks/usePlaylistsById";

const PlaylistsList = () => {
  const { playlists } = usePlaylistContext();
  const { loading, error } = usePlaylistsById();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  if (loading) {
    return <LoadingGif src={loadingGif} alt="Carregando playlists..." />;
  }

  if (error) {
    console.error("Erro ao carregar playlists:", error);
    return <div>{error}</div>;
  }
console.log(playlists)
  return (
    <div>
      <h1>Minhas Playlists</h1>
      {Array.isArray(playlists) && playlists.length > 0 ? (
        <ul>
          {playlists.map((playlist) => (
            <PlaylistItem key={playlist._id}>
              <h3>{playlist._name}</h3>
              <p>{playlist._description}</p>
            </PlaylistItem>
          ))}
        </ul>
      ) : (
        <p>Você ainda não criou nenhuma playlist.</p>
      )}

      <button onClick={toggleModal}>Criar Nova Playlist</button>

      <CreatePlaylistModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default PlaylistsList;
