import { useParams } from "react-router-dom"; 
import React from "react";
import SongDetails from "../Components/SongDetails";

const Track =()=>{
    const { trackId } = useParams();
    return<>
        <SongDetails trackId={trackId}></SongDetails>
    </>
}

export default Track