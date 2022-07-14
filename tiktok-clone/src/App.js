import './App.css';
import {useEffect,useState} from "react";
import Video from "./Video";
import axios from 'axios'

function App() {
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        const getVideos = async ()=>{
            const res = await axios.get('https://tiktok-clone-30.herokuapp.com/v1/posts');
            setVideos(res.data);
        };
        getVideos();
    },[])
  return (
    <div className="app">
        <div className={"app_videos"}>
            {videos?.map((video,id)=>(

                    <Video
                        key={id}
                        url={video.url}
                        channel={video.channel}
                        description={video.description}
                        song={video.song}
                        likes={video.likes}
                        comments={video.messages}
                        shares={video.shares}
                    />


            ))}
        </div>
    </div>
  );
}

export default App;
