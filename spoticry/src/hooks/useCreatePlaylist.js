import { useState } from "react";
import axios from "axios";
import URL_BASE from "../Constants/URL_BASE";
import { getUserIdFromToken } from "../services/getUserIdFromToken";
import { usePlaylistContext } from "../contexts/PlaylistContext";

export const useCreatePlaylist = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { updatePlaylists, playlists } = usePlaylistContext();

  const createPlaylist = async ({ name, songs, description }) => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem("spoticry_token");
    const userId = getUserIdFromToken(token);

    if (!token || !userId) {
      setLoading(false);
      setError("Usuário não autenticado ou ID inválido. Faça login novamente.");
      return null;
    }

    const tempId = `temp-${Date.now()}`;
    const tempPlaylist = { id: tempId, name, description, songs, userId };

    updatePlaylists([...playlists, tempPlaylist]);

    try {
      const requestBody = {
        userId: userId,
        name: name,
        description: description || "Sem descrição",
        songs: songs
      };

      const response = await axios.post(`${URL_BASE}/playlist`, requestBody, {
        headers: {
          Authorization: token,
        },
      });

      const newPlaylist = response.data;

      updatePlaylists((prevPlaylists) =>
        prevPlaylists.map((playlist) =>
          playlist.id === tempId ? { ...newPlaylist, id: newPlaylist.id } : playlist
        )
      );

      setLoading(false);
      return newPlaylist;
    } catch (err) {
      console.error("Erro ao criar a playlist:", err);

      if (err.response) {
        setError(`Erro da API: ${err.response.data.message || "Ocorreu um erro ao criar a playlist."}`);
      } else if (err.request) {
        setError("Erro de conexão. Verifique sua internet.");
      } else {
        setError("Erro desconhecido. Tente novamente.");
      }

      updatePlaylists((prevPlaylists) =>
        prevPlaylists.filter((playlist) => playlist.id !== tempId)
      );

      setLoading(false);
      return null;
    }
  };

  return { createPlaylist, loading, error };
};
