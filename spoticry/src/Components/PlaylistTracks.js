import React, { useState, useEffect } from "react";
import axios from "axios";
import { LoadingGif, PlaylistTitle } from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";
import URL_BASE from "../Constants/URL_BASE";
import { useCoordinator } from "../hooks/useCoordinator";
import {
  Container,
  Title,
  TrackList,
  TrackItem,
  TrackTitle,
  TrackArtist,
  Button,
  ErrorText,
} from "../style";

const PlaylistTracks = ({ playlistId, tracks, setTracks }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("spoticry_token");
  const { goToTrack } = useCoordinator();

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
      await axios.delete(`${URL_BASE}/playlist/${playlistId}/song/${songId}`, {
        headers: { Authorization: token },
      });
      alert("Música removida com sucesso!");
      setTracks((prevTracks) =>
        prevTracks.filter((track) => track.id !== songId)
      );
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
    <Container>
      <PlaylistTitle>Músicas da Playlist</PlaylistTitle>
      {loading && <LoadingGif src={loadingGif} alt="Carregando..." />}
      {error && <ErrorText>{error}</ErrorText>}

      <TrackList>
        {!loading &&
          tracks.length > 0 &&
          tracks.map((track) =>
            track ? (
              <TrackItem key={track.id}>
                <div>
                  <TrackTitle>{track.title}</TrackTitle>
                  <TrackArtist>{track.artist}</TrackArtist>
                </div>
                <div>
                  <Button onClick={() => goToTrack(track.id)}>Ver Detalhes</Button>
                </div>
                <div>
                  <Button onClick={() => removeSongFromPlaylist(track.id)}>
                    Remover
                  </Button>
                </div>
              </TrackItem>
            ) : null
          )
        }          

        {!loading && tracks.length === 0 && <p>Sem músicas na playlist</p>}
      </TrackList>
    </Container>
  );
};

export default PlaylistTracks;

