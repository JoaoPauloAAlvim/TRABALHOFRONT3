import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "./Login";
import Playlists from"./Playlists";
import Playlist from "./Playlist";
import Track from "./Track";
import Songs from"./Songs";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/playlist/:playlistId" element={<Playlist />} />
        <Route path="/song/:trackId" element={<Track />} />
        <Route path="/mysongs" element={<Songs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
