import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useEditPlaylist } from "../hooks/useEditPlaylist";
import { LoadingGif } from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";
import { ErrorMessage } from "../style";

const EditPlaylistModal = ({ isOpen, onClose, playlist }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { editPlaylist, loading: editing, error: editError } = useEditPlaylist();

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
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Editar Playlist">
      <h2>Editar Playlist</h2>
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
        <button type="submit" disabled={editing}>
          {editing ? <LoadingGif src={loadingGif} alt="Carregando..." /> : "Salvar Alterações"}
        </button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </form>
      {editError && <ErrorMessage>{editError}</ErrorMessage>}
    </Modal>
  );
};

export default EditPlaylistModal;
