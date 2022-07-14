import "./Video.css";
import {useRef, useState} from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({url , channel,description,song,likes,comments,shares})=>{
    const videoRef = useRef(null);
    const [Playing,setPlaying]=useState(false);
    const handleVideo=()=>{
        if(Playing){
            videoRef.current.pause();
            setPlaying(false)
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return(
        <div className={"video"}>
            <video
                onClick={handleVideo}
                ref={videoRef}
                src={url}
                loop
                className={"video__player"}
            >
            </video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} shares={shares} comments={comments} />
        </div>
    )
}

export default Video;