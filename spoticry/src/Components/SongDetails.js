import React, { useState, useEffect } from "react";
import axios from "axios";
import URL_BASE from "../Constants/URL_BASE";
import { LoadingGif, SongContainer, SongTitle, SongArtist, SongLink, ErrorMessage } from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";

const SongDetails = ({ trackId }) => {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("spoticry_token");

  const fetchSongDetails = async () => {
    try {
      const response = await axios.get(`${URL_BASE}/song/${trackId}`, {
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
    if (trackId) {
      fetchSongDetails();
    }
  }, [trackId]);

  return (
    <SongContainer>
      <h2>Detalhes da Música</h2>
      {loading && <LoadingGif src={loadingGif} alt="Carregando" />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {song && (
        <div>
          <SongTitle>{song.title}</SongTitle>
          <SongArtist>Artista: {song.artist}</SongArtist>
          <SongLink href={song.url} target="_blank" rel="noopener noreferrer">
            Assistir no YouTube
          </SongLink>
        </div>
      )}
    </SongContainer>
  );
};

export default SongDetails;
