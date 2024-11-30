import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import URL_BASE from "../Constants/URL_BASE";
import { LoadingGif } from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";

const EditSongModal = ({ isOpen, onClose, song, onSave }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [url, setUrl] = useState("");
  const [editing, setEditing] = useState(false);
  const [editError, setEditError] = useState(null);

  const token = localStorage.getItem("spoticry_token");

  useEffect(() => {
    if (song) {
      setTitle(song.title || "");
      setArtist(song.artist || "");
      setUrl(song.url || "");
    }
  }, [song]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEditing(true); 
    setEditError(null);  

    const updatedSong = { title, artist, url };

    try {
      await axios.patch(`${URL_BASE}/song/${song.id}`, updatedSong, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      alert("Música editada com sucesso!");
      onSave(); 
      onClose(); 
    } catch (error) {
      console.error("Erro ao editar música:", error);
      setEditError("Erro ao editar música. Por favor, tente novamente.");
    } finally {
      setEditing(false);  
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Editar Música"
    >
      <h2>Editar Música</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Artista:</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={editing}>
          {editing ? (
            <LoadingGif src={loadingGif} alt="Carregando..." />
          ) : (
            "Salvar Alterações"
          )}
        </button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </form>
      {editError && <p>{editError}</p>}
    </Modal>
  );
};

export default EditSongModal;
