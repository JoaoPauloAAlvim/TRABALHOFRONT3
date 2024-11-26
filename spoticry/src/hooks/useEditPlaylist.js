import { useState } from "react";
import axios from "axios";
import URL_BASE from "../Constants/URL_BASE";
import { getUserIdFromToken } from "../services/getUserIdFromToken";
import { usePlaylistContext } from "../contexts/PlaylistContext";

export const useEditPlaylist = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { updatePlaylists, playlists } = usePlaylistContext();

  const editPlaylist = async ({ id, name, description, songs }) => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem("spoticry_token");
    const userId = getUserIdFromToken(token);

    if (!token || !userId) {
      setLoading(false);
      setError("Usuário não autenticado ou ID inválido. Faça login novamente.");
      return null;
    }

    try {
      const requestBody = {
        userId: userId,
        name: name,
        description: description || "Sem descrição",
        songs: songs
      };

      const response = await axios.patch(`${URL_BASE}/playlist/${id}`, requestBody, {
        headers: {
          Authorization: token,
        },
      });

      const updatedPlaylist = response.data;

      updatePlaylists((prevPlaylists) =>
        prevPlaylists.map((playlist) =>
          playlist._id === id ? { ...updatedPlaylist } : playlist
        )
      );

      setLoading(false);
      return updatedPlaylist;
    } catch (err) {
      console.error("Erro ao editar a playlist:", err);

      if (err.response) {
        setError(`Erro da API: ${err.response.data.message || "Erro ao editar a playlist."}`);
      } else if (err.request) {
        setError("Erro de conexão. Verifique sua internet.");
      } else {
        setError("Erro desconhecido. Tente novamente.");
      }

      setLoading(false);
      return null;
    }
  };

  return { editPlaylist, loading, error };
};
