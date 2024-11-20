import { useNavigate } from "react-router-dom";

export const useCoordinator = () => {
  const navigate = useNavigate();

  const goToLogin = () => navigate("/login");
  const goToHome = () => navigate("/");
  const goBack = () => navigate(-1);
  const goToPlaylists = () => navigate("/playlists");
  const goToTracks = (playlistId) => navigate(`/playlists/${playlistId}/tracks`);
  const goToSong = (songId) => navigate(`/song/${songId}`);

  return { goToLogin, goToHome, goBack, goToPlaylists, goToTracks, goToSong };
};
