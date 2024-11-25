import React, { useState } from "react";
import Modal from "react-modal";
import { useCreatePlaylist } from "../hooks/useCreatePlaylist";
import { LoadingGif } from "../style";
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
      <h2>Criar Nova Playlist</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome da Playlist:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição (opcional):</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" disabled={creating}>
          {creating ? <LoadingGif src={loadingGif} alt="Carregando..." /> : "Criar Playlist"}
        </button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </form>
      {creationError && <ErrorMessage>{creationError}</ErrorMessage>}
    </Modal>
  );
};

export default CreatePlaylistModal;
