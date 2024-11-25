import React, { useEffect } from "react";
import { PlaylistProvider } from "./contexts/PlaylistContext";
import Router from "./Pages/Router";
import Modal from "react-modal";  

const App = () => {
  useEffect(() => {
    Modal.setAppElement("#root"); 
  }, []);

  return (
    <PlaylistProvider>
      <Router />
    </PlaylistProvider>
  );
};

export default App;
