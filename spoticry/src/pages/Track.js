import { useParams } from "react-router-dom"; 
import React from "react";
import SongDetails from "../Components/SongDetails";

const Track =()=>{
    const { songId } = useParams();
    return<>
        <SongDetails songId={songId}></SongDetails>
    </>
}

export default Track