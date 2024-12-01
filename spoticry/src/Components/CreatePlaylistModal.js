import React, { useState } from "react";
import Modal from "react-modal";
import { useCreatePlaylist } from "../hooks/useCreatePlaylist";
import { LoadingGif,ModalContainer,ModalTitle,ModalContent,Input,Textarea,ModalActions,Button,CancelButton } from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";
import { ErrorMessage } from "../style";



const CreatePlaylistModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { createPlaylist, loading: creating, error: creationError } = useCreatePlaylist();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("O nome da playlist é obrigatório!");
      return;
    }

    const playlistData = {
      name,
      songs: [],
      description,
    };

    const result = await createPlaylist(playlistData);
    if (result) {
      alert("Playlist criada com sucesso!");
      setName("");
      setDescription("");
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Criar Nova Playlist">
      <ModalContainer>
        <ModalTitle>Criar Nova Playlist</ModalTitle>
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
              <Button type="submit" disabled={creating}>
                {creating ? <LoadingGif src={loadingGif} alt="Carregando..." /> : "Criar Playlist"}
              </Button>
              <CancelButton type="button" onClick={onClose}>
                Cancelar
              </CancelButton>
            </ModalActions>
          </form>
        </ModalContent>
        {creationError && <ErrorMessage>{creationError}</ErrorMessage>}
      </ModalContainer>
    </Modal>
  );
};

export default CreatePlaylistModal;
