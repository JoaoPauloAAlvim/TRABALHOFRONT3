import React, { useState } from "react";
import { usePlaylistContext } from "../contexts/PlaylistContext";
import { LoadingGif, PlaylistItem } from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";
import { usePlaylistsById } from "../hooks/usePlaylistsById";
import { useDeletePlaylist } from "../hooks/useDeletePlaylist";
import CreatePlaylistModal from "./CreatePlaylistModal";
import EditPlaylistModal from "./EditPlaylistModal";
import { useCoordinator } from "../hooks/useCoordinator";

const PlaylistsList = () => {
  const { playlists, updatePlaylists } = usePlaylistContext();
  const { loading, error } = usePlaylistsById();
  const {
    deletePlaylist,
    loading: deleting,
    error: deleteError,
  } = useDeletePlaylist();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const { goToPlaylist } = useCoordinator();

  const toggleCreateModal = () => setIsCreateModalOpen((prev) => !prev);

  const toggleEditModal = () => setIsEditModalOpen((prev) => !prev);

  const handleDelete = async (playlistId) => {
    if (window.confirm("Tem certeza que deseja excluir esta playlist?")) {
      const result = await deletePlaylist(playlistId);
      if (result.success) {
        alert("Playlist excluída com sucesso!");
        updatePlaylists(
          playlists.filter((playlist) => playlist._id !== playlistId)
        );
      } else {
        alert("Erro ao excluir a playlist: " + deleteError);
      }
    }
  };

  const handleEdit = (playlist) => {
    setSelectedPlaylist(playlist);
    toggleEditModal();
  };

  const handleGoToPlaylist = (playlistId) => {
    goToPlaylist(playlistId); 
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
              <button onClick={() => handleEdit(playlist)}>Editar</button>
              <button
                onClick={() => handleDelete(playlist._id)}
                disabled={deleting}
              >
                {deleting ? (
                  <LoadingGif src={loadingGif} alt="Deletando playlist..." />
                ) : (
                  "Excluir"
                )}
              </button>
              <button onClick={() => handleGoToPlaylist(playlist._id)}>
                Ir para Músicas
              </button>
            </PlaylistItem>
          ))}
        </ul>
      ) : (
        <p>Você ainda não criou nenhuma playlist.</p>
      )}

      <button onClick={toggleCreateModal}>Criar Nova Playlist</button>
      <CreatePlaylistModal
        isOpen={isCreateModalOpen}
        onClose={toggleCreateModal}
      />

      <EditPlaylistModal
        isOpen={isEditModalOpen}
        onClose={toggleEditModal}
        playlist={selectedPlaylist}
      />
    </div>
  );
};

export default PlaylistsList;
