import React, { useState, useEffect } from "react";
import axios from "axios";
import URL_BASE from "../Constants/URL_BASE";

const SongDetails = ({ songId }) => {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("spoticry_token")

  const fetchSongDetails = async () => {
    try {
      const response = await axios.get(`${URL_BASE}/song/${songId}`, {
        headers: { Authorization: token },
      });
      setSong(response.data.song);
    } catch (err) {
      setError("Erro ao carregar detalhes da música.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (songId) {
      fetchSongDetails();
    }
  }, [songId]);

  return (
    <div>
      <h2>Detalhes da Música</h2>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {song && (
        <div>
          <h3>{song.title}</h3>
          <p>Artista: {song.artist}</p>
          <a href={song.url} target="_blank" rel="noopener noreferrer">
            Assistir no YouTube
          </a>
        </div>
      )}
    </div>
  );
};

export default SongDetails;
