import React, { useState, useEffect } from "react";
import axios from "axios";
import { LoadingGif } from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";
import URL_BASE from "../Constants/URL_BASE";

const AddSongToPlaylist = ({ selectedPlaylistId }) => {
  const [selectedSong, setSelectedSong] = useState("");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("spoticry_token");

  const fetchSongs = async () => {
    if (!token) {
      setError("Você precisa estar autenticado.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`${URL_BASE}/song`, {
        headers: {
          Authorization: token,
        },
      });
      console.log("Músicas carregadas:", response.data);
      setSongs(response.data.songs); 
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Erro ao carregar músicas.");
      console.error("Erro ao carregar músicas:", err);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [token]);

  const handleAddSongToPlaylist = async () => {
    if (!selectedSong) {
      alert("Por favor, selecione uma música.");
      return;
    }

    setLoading(true);
    try {
      if (!token) {
        alert("Você precisa estar autenticado.");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        `${URL_BASE}/playlist/${selectedPlaylistId}/song`,
        { songId: selectedSong },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert(response.data.message || "Música adicionada com sucesso!");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Erro ao adicionar música.");
      console.error("Erro ao adicionar música:", err);
    }
  };

  return (
    <div>
      <h2>Adicionar Música à Playlist</h2>
      {loading && <LoadingGif src={loadingGif} alt="Carregando..." />}
      {error && <p>{error}</p>}

      <div>
        <label>Selecione a Música:</label>
        <select
          value={selectedSong}
          onChange={(e) => setSelectedSong(e.target.value)}
        >
          <option value="">Selecione uma Música</option>
          {Array.isArray(songs) && songs.length > 0 ? (
            songs.map((song) => (
              <option key={song.id} value={song.id}>
                {song.title}
              </option>
            ))
          ) : (
            <option disabled>Sem músicas disponíveis</option>
          )}
        </select>
      </div>

      <button onClick={handleAddSongToPlaylist} disabled={loading}>
        {loading ? <LoadingGif src={loadingGif} alt="Adicionando Música..." /> : "Adicionar Música"}
      </button>
    </div>
  );
};

export default AddSongToPlaylist;
