import React, { useState } from "react";
import { usePlaylistContext } from "../contexts/PlaylistContext";
import { LoadingGif, GlobalStyle,Container,Title,PlaylistListContainer,NoPlaylistsMessage,CreatePlaylistButton,PlaylistItemStyled } from "../style";
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
    <>
      <GlobalStyle />
      <Container>
        <Title>Minhas Playlists</Title>
        {Array.isArray(playlists) && playlists.length > 0 ? (
          <PlaylistListContainer>
            {playlists.map((playlist) => (
              <PlaylistItemStyled key={playlist._id}>
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
              </PlaylistItemStyled>
            ))}
          </PlaylistListContainer>
        ) : (
          <NoPlaylistsMessage>Você ainda não criou nenhuma playlist.</NoPlaylistsMessage>
        )}

        <CreatePlaylistButton onClick={toggleCreateModal}>Criar Nova Playlist</CreatePlaylistButton>

        <CreatePlaylistModal
          isOpen={isCreateModalOpen}
          onClose={toggleCreateModal}
        />

        <EditPlaylistModal
          isOpen={isEditModalOpen}
          onClose={toggleEditModal}
          playlist={selectedPlaylist}
        />
      </Container>
    </>
  );
};

export default PlaylistsList;
