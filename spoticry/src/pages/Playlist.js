import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import PlaylistsList from "../Components/PlaylistList";

const Playlist =()=>{
useProtectedPage()
    return <>
        <PlaylistsList/>
    </>
}
export default Playlist;