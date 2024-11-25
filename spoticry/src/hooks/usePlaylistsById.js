import { useState, useEffect } from "react";
import axios from "axios";
import { getUserIdFromToken } from "../services/getUserIdFromToken";
import URL_BASE from "../Constants/URL_BASE";
import { usePlaylistContext } from "../contexts/PlaylistContext"; 

export const usePlaylistsById = (reloadFlag) => {
  const { playlists, updatePlaylists } = usePlaylistContext(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("spoticry_token");
  const userId = getUserIdFromToken(token);

  const fetchPlaylists = async () => {
    if (!userId || !token) {
      setError("Usuário não autenticado.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${URL_BASE}/playlist/user/${userId}/playlists`, {
        headers: {
          Authorization: token,
        },
      });
      updatePlaylists(response.data.playlists || []);
    } catch (err) {
      console.error("Erro ao buscar playlists:", err);
      setError("Erro ao carregar playlists.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []); 

  useEffect(() => {
    if (reloadFlag) {
      fetchPlaylists();
    }
  }, [reloadFlag]);

  return { playlists, loading, error };
};
