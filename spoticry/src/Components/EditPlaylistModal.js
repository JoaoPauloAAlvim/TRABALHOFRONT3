import React, { useState, useEffect } from "react";
import { useEditPlaylist } from "../hooks/useEditPlaylist";
import {
  Button,
  CancelButton,
  Input,
  LoadingGif,
  ModalActions,
  ModalContainer,
  ModalContent,
  ModalTitle,
  Textarea,
  Backdrop,
} from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";
import { ErrorMessage } from "../style";

const EditPlaylistModal = ({ isOpen, onClose, playlist }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const {
    editPlaylist,
    loading: editing,
    error: editError,
  } = useEditPlaylist();

  useEffect(() => {
    if (playlist) {
      setName(playlist._name);
      setDescription(playlist._description || "");
    }
  }, [playlist, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("O nome da playlist é obrigatório!");
      return;
    }

    const playlistData = {
      name,
      description,
      songs: playlist.songs,
    };

    const result = await editPlaylist({ id: playlist._id, ...playlistData });
    if (result) {
      alert("Playlist editada com sucesso!");
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <Backdrop onClick={onClose}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Editar Playlist</ModalTitle>
            <ModalContent>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Nome da Playlist:</label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Descrição (opcional):</label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <ModalActions>
                  <Button type="submit" disabled={editing}>
                    {editing ? (
                      <LoadingGif src={loadingGif} alt="Carregando..." />
                    ) : (
                      "Salvar Alterações"
                    )}
                  </Button>
                  <CancelButton type="button" onClick={onClose}>
                    Cancelar
                  </CancelButton>
                </ModalActions>
              </form>
            </ModalContent>
            {editError && <ErrorMessage>{editError}</ErrorMessage>}
          </ModalContainer>
        </Backdrop>
      )}
    </>
  );
};

export default EditPlaylistModal;
