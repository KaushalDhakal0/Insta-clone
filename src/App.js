import "./App.css";
import Video from "./Components/Video";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";
// import video4 from "./video4.mp4";
import video5 from "./video5.mp4";
import video6 from "./video6.mp4";
// import video7 from "./video7.mp4";
function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video vdo={video1} />
        <Video vdo={video2} />
        <Video vdo={video3} />
        <Video vdo={video6} />
        <Video vdo={video5} />
        <Video vdo={video6} />
        <Video vdo={video2} />
      </div>
    </div>
  );
}

export default App;
