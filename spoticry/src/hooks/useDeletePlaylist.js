import { useState } from "react";
import axios from "axios";
import URL_BASE from "../Constants/URL_BASE";

export const useDeletePlaylist = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePlaylist = async (playlistId) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("spoticry_token")

      await axios.delete(`${URL_BASE}/playlist/${playlistId}`, {
        headers: {
          Authorization: token,
        },
      });

      setLoading(false);
      return { success: true };
    } catch (err) {
      console.error("Erro ao deletar playlist:", err.response?.data || err.message);
      setError(err.response?.data?.erro || "Erro desconhecido.");
      setLoading(false);
      return { success: false };
    }
  };

  return { deletePlaylist, loading, error };
};
