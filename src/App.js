import "./App.css";
import Video from "./Components/Video";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";
function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video vdo={video1} />
        <Video vdo={video2} />
        <Video vdo={video3} />
      </div>
    </div>
  );
}

export default App;
