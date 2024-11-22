import { useState, useEffect } from "react";
import axios from "axios";
import { getUserIdFromToken } from "../services/getUserIdFromToken";
import URL_BASE from "../Constants/URL_BASE";

export const usePlaylistsById = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("spoticry_token");
  const userId = getUserIdFromToken(token);
  
  const getPlaylistById = () => {
    if (!userId || !token) {
      setError("Parâmetros inválidos ou usuário não autenticado.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    axios
      .get(`${URL_BASE}/playlist/user/${userId}/playlists`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setPlaylists(Array.isArray(response.data) ? response.data : []);
      })
      .catch((err) => {
        setError("Erro ao carregar playlists.");
        console.error("Erro ao buscar playlists:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getPlaylistById();
  }, []);

  useEffect(() => {
    getPlaylistById();
  }, [userId]);

  return { playlists, loading, error };
};
