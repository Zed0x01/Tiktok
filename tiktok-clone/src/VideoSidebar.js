import "./VideoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";

const VideoSidebar = ({likes,comments,shares})=>{
    const [liked,setLiked]= useState();

    return(
        <div className={"videoSidebar"}>
            <div className="videoSidebar__button">
                {!liked ? (
                    <FavoriteBorderIcon onClick={()=> setLiked(prev => !prev)} fontSize={"large"} />
                ):(
                    <FavoriteIcon onClick={()=> setLiked(prev => !prev)} fontSize={"large"} />
                )}
                <p>{liked ? likes +1 : likes }</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize={"large"} />
                <p>{comments}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize={"large"} />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar;