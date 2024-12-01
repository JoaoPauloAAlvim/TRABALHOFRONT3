import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import URL_BASE from "../Constants/URL_BASE";
import { Button, CancelButton, ErrorMessage, Input, LoadingGif, ModalActions, ModalContainer, ModalContent, ModalTitle } from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";

const CreateSongModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [url, setUrl] = useState("");
  const [creating, setCreating] = useState(false);
  const [creationError, setCreationError] = useState(null);

  const token = localStorage.getItem("spoticry_token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreating(true);
    setCreationError(null);

    const newSong = { title, artist, url };

    try {
      await axios.post(`${URL_BASE}/song`, newSong, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      alert("Música criada com sucesso!");
      setTitle("");
      setArtist("");
      setUrl("");
      onClose(); 
    } catch (error) {
      console.error("Erro ao criar música:", error);
      setCreationError("Erro ao criar música. Por favor, tente novamente.");
    } finally {
      setCreating(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Adicionar Nova Música"
    >
      <ModalContainer>
      <ModalTitle>Adicionar Nova Música</ModalTitle>
      <ModalContent>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Artista:</label>
          <Input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        <div>
          <label>URL:</label>
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <ModalActions>
        <Button type="submit" disabled={creating}>
          {creating ? (
            <LoadingGif src={loadingGif} alt="Carregando..." />
          ) : (
            "Adicionar Música"
          )}
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

export default CreateSongModal;
