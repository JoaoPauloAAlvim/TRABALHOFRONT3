import React, { useState, useEffect } from "react";
import axios from "axios";
import { LoadingGif } from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";
import URL_BASE from "../Constants/URL_BASE";
import { useCoordinator } from "../hooks/useCoordinator";

const PlaylistTracks = ({ playlistId }) => {
  const [tracks, setTracks] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("spoticry_token");
  const {goToSong} = useCoordinator()

  const fetchPlaylistTracks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${URL_BASE}/playlist/${playlistId}/song`,
        {
          headers: { Authorization: token },
        }
      );

      const songIds = response.data.songs;

      const songDetailsPromises = songIds.map(async (id) => {
        const songResponse = await axios.get(`${URL_BASE}/song/${id}`, {
          headers: { Authorization: token },
        });
        return songResponse.data.song; 
      });

      const songDetails = await Promise.all(songDetailsPromises); 
      setTracks(songDetails); 
    } catch (err) {
      console.error("Erro ao carregar músicas da playlist:", err);
      setError("Erro ao carregar músicas.");
    } finally {
      setLoading(false);
    }
  };

  const removeSongFromPlaylist = async (songId) => {
    try {
      await axios.delete(
        `${URL_BASE}/playlist/${playlistId}/song/${songId}`,
        {
          headers: { Authorization: token },
        }
      );
      alert("Música removida com sucesso!");
      setTracks((prevTracks) => prevTracks.filter((track) => track.id !== songId));
    } catch (error) {
      console.error("Erro ao remover música:", error);
      alert("Erro ao remover música da playlist.");
    }
  };

  useEffect(() => {
    if (playlistId) {
      fetchPlaylistTracks();
    }
  }, [playlistId]);

  return (
    <div>
      <h2>Músicas da Playlist</h2>
      {loading && <LoadingGif src={loadingGif} alt="Carregando..." />}
      {error && <p>{error}</p>}

      <div className="tracks-container">
        {tracks.length > 0 ? (
          tracks.map((track) => (
            <div key={track.id} className="track-item">
              <p>
                <strong>{track.title}</strong> - {track.artist}
              </p>
              <button onClick={() => removeSongFromPlaylist(track.id)}>Remover</button>
              <button onClick={()=>goToSong(track.id)}>Ver Detalhes</button>
            </div>
          ))
        ) : (
          <p>Sem músicas na playlist</p>
        )}
      </div>
    </div>
  );
};

export default PlaylistTracks;
