import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "./Login";
import Playlists from"./Playlists";
import Playlist from "./Playlist";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/playlist/:id" element={<Playlist />} />
        {/* <Route path="/song" element={<Song />} />  */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
