import { useNavigate } from "react-router-dom";

export const useCoordinator = () => {
  const navigate = useNavigate();

  const goToLogin = () => navigate("/login");
  const goToHome = () => navigate("/");
  const goBack = () => navigate(-1);
  const goToPlaylists = () => navigate("/playlist");
  const goToTracks = () => navigate("/playlist/tracks");
  const goToSong = () => navigate("/song");

  return { goToLogin, goToHome, goBack, goToPlaylists, goToTracks, goToSong };
};
