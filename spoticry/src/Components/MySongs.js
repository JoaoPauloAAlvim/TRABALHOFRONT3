import React, { useState, useEffect } from "react";
import axios from "axios";
import { ErrorMessage, LoadingGif, SongsContainer, SongItem, SongList, SongTitle, ActionButton } from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";
import URL_BASE from "../Constants/URL_BASE";
import getUserIdFromToken from "../services/getUserIdFromToken"

const MySongs = ({ onEdit }) => {
  const [songs, setSongs] = useState([]);
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
  
  const deleteSong = async (songId) => {
    if (!window.confirm("Você tem certeza que deseja excluir esta música?")) {
      return;
    }

    try {
      await axios.delete(`${URL_BASE}/song/${songId}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Música excluída com sucesso!");
      setSongs((prevSongs) => prevSongs.filter((song) => song.id !== songId));
    } catch (err) {
      console.error("Erro ao excluir música:", err);
      alert("Erro ao excluir música.");
    }
  };

  useEffect(() => {
    fetchMySongs();
  }, []);

  return (
    <SongsContainer>
      <h1>Minhas Músicas</h1>
      {loading && <LoadingGif src={loadingGif} alt="Carregando..." />}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {songs.length > 0 ? (
        <SongList>
        {songs.map((song) => (
          <SongItem key={song.id}>
            <SongTitle>
              <strong>{song.title}</strong> - {song.artist}
            </SongTitle>
            <ActionButton onClick={() => onEdit(song)}>Editar</ActionButton>
            <ActionButton onClick={() => deleteSong(song.id)}>Excluir</ActionButton>
          </SongItem>
        ))}
      </SongList>
      ) : (
        !loading && <p>Você não possui músicas criadas.</p>
      )}
    </SongsContainer>
  );
};

export default MySongs;
