import React, { useState } from "react";
import CreatePlaylistModal from "./CreatePlaylistModal";
import { usePlaylistContext } from "../contexts/PlaylistContext";
import { LoadingGif, PlaylistItem } from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";
import { usePlaylistsById } from "../hooks/usePlaylistsById";
import { useDeletePlaylist } from "../hooks/useDeletePlaylist";

const PlaylistsList = () => {
  const { playlists, updatePlaylists } = usePlaylistContext();
  const { loading, error } = usePlaylistsById();
  const {
    deletePlaylist,
    loading: deleting,
    error: deleteError,
  } = useDeletePlaylist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const handleDelete = async (playlistId) => {
    if (window.confirm("Tem certeza que deseja excluir esta playlist?")) {
      const result = await deletePlaylist(playlistId);  
      if (result.success) {
        alert("Playlist excluída com sucesso!");
        updatePlaylists(playlists.filter((playlist) => playlist._id !== playlistId)); 
      } else {
        alert("Erro ao excluir a playlist: " + deleteError);
      }
    }
  };

  if (loading) {
    return <LoadingGif src={loadingGif} alt="Carregando playlists..." />;
  }

  if (error) {
    console.error("Erro ao carregar playlists:", error);
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Minhas Playlists</h1>
      {Array.isArray(playlists) && playlists.length > 0 ? (
        <ul>
          {playlists.map((playlist) => (
            <PlaylistItem key={playlist._id}>
              <h3>{playlist._name}</h3>
              <p>{playlist._description || "Sem descrição"}</p>
              <button
                onClick={() => handleDelete(playlist._id)}
                disabled={deleting}
              >
                {deleting ? "Excluindo..." : "Excluir"}
              </button>
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
