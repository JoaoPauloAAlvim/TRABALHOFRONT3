import React, { useState } from "react";
import axios from "axios";
import {
  LoadingGif,
  PlaylistItem,
  SearchContainer,
  SearchInput,
  SearchButton,
  ErrorMessage,
} from "../style";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif";
import URL_BASE from "../Constants/URL_BASE";
import getUserIdFromToken from "../services/getUserIdFromToken";
import { useCoordinator } from "../hooks/useCoordinator";

const SearchMyPlaylists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { goToPlaylist } = useCoordinator();
  const [hasSearched, setHasSearched] = useState(false);

  const token = localStorage.getItem("spoticry_token");

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      alert("Por favor, insira um nome ou termo de busca válido.");
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await axios.get(
        `${URL_BASE}/playlist/search/${searchTerm}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const userId = getUserIdFromToken(token);
      const myPlaylists = response.data.playlists.filter(
        (playlist) => playlist._userId === userId
      );

      setPlaylists(myPlaylists);
    } catch (err) {
      console.error("Erro ao buscar playlists:", err);
      setError("Erro ao buscar playlists. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContainer>
      <h2>Buscar Minhas Playlists</h2>
      <div>
        <SearchInput
          type="text"
          placeholder="Nome da Playlist"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={handleSearch} disabled={loading}>
          {loading ? (
            <LoadingGif src={loadingGif} alt="Carregando..." />
          ) : (
            "Buscar"
          )}
        </SearchButton>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {playlists.length > 0 ? (
        <ul>
          {playlists.map((playlist) => (
            <PlaylistItem key={playlist._id}>
              <h3>{playlist._name}</h3>
              <p>{playlist._description || "Sem descrição"}</p>
              <button onClick={() => goToPlaylist(playlist._id)}>
                Ir para Músicas
              </button>
            </PlaylistItem>
          ))}
        </ul>
      ) : (
        hasSearched && !loading && <p>Nenhuma playlist encontrada.</p>
      )}
    </SearchContainer>
  );
};

export default SearchMyPlaylists;
