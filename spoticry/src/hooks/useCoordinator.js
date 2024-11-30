import { useNavigate } from "react-router-dom";

export const useCoordinator = () => {
  const navigate = useNavigate();

  const goToLogin = () => navigate("/login");
  const goToHome = () => navigate("/");
  const goBack = () => navigate(-1);
  const goToPlaylists = () => navigate("/playlists");
  const goToPlaylist = (playlistId) => navigate(`/playlists/playlist/${playlistId}`);
  const goToTrack = (trackId) => navigate(`/song/${trackId}`);
  const goToMySongs= () => navigate("/mysongs");

  return { goToLogin, goToHome, goBack, goToPlaylists, goToPlaylist, goToTrack,goToMySongs };
};
