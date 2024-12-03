import React, { useState, useEffect } from "react";
import MySongs from "../Components/MySongs";
import CreateSongModal from "../Components/CreateSongModal";
import EditSongModal from "../Components/EditSongModal";
import axios from "axios";
import URL_BASE from "../Constants/URL_BASE";
import getUserIdFromToken from "../services/getUserIdFromToken";
import { Button, PlaylistTitle } from "../style";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingSong, setEditingSong] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("spoticry_token");

  const fetchMySongs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${URL_BASE}/song`, {
        headers: {
          Authorization: token,
        },
      });
      const myUserId = getUserIdFromToken(token);
      const userSongs = response.data.songs.filter(
        (song) => song.userId === myUserId
      );
      setSongs(userSongs);
    } catch (err) {
      console.error("Erro ao carregar músicas:", err);
      setError("Erro ao carregar suas músicas.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMySongs();
  }, []);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const openEditModal = (song) => {
    setEditingSong(song); 
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setEditingSong(null); 
    setIsEditModalOpen(false);
  };

  const handleSave = () => {
    fetchMySongs();
  };

  return (
    <>
      <PlaylistTitle>Adicione sua própria música à plataforma</PlaylistTitle>
      <MySongs onEdit={openEditModal} songs={songs} /> 
      <Button onClick={openCreateModal}>Adicionar Nova Música</Button>

      <CreateSongModal isOpen={isCreateModalOpen} onClose={closeCreateModal} />

      {editingSong && (
        <EditSongModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          song={editingSong}
          onSave={handleSave}  
        />
      )}
    </>
  );
};

export default Songs;
