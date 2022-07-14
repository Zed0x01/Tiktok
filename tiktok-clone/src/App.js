import './App.css';
import Video from "./Video";

function App() {
  return (
    <div className="app">
        <div className={"app_videos"}>
            <Video
                url={"https://bit.ly/3Rqk11A"}
                channel={"zed0x01"}
                description={"Wohooo!! Amazing MERN Stack."}
                song={"Help Me!"}
                likes={500}
                comments={305}
                shares={30}
            />
            <Video />
        </div>
    </div>
  );
}

export default App;
