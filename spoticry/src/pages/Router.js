import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import  Login  from "./Login";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/playlists" element={<Playlist/>} />
          <Route path="/playlists/:id/tracks" element={<Track/>} />
          <Route path="/song/:id" element={<Song/>} /> */}
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default Router;