import "./App.css";
import Video from "./Components/Video";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";
import video7 from "./video7.mp4";
import video5 from "./video5.mp4";
import video6 from "./video6.mp4";
function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          links={video7}
          channel="Nepali"
          description="Trending video in nepal"
          song="Please give your love"
          likes="800"
          messages="489"
          shares="150"
        />
        <Video
          links={video2}
          channel="Village Life"
          description="Comedy"
          song="Please like share and Subscribe"
          likes="896"
          messages="37"
          shares="13"
        />
        <Video
          links={video3}
          channel="Urdu"
          description="Job interview"
          song="wierdest job interview"
          likes="108"
          messages="226"
          shares="850"
        />
        <Video
          links={video1}
          channel="Nepali"
          description="Comedy"
          song="future miss Nepal"
          likes="5089"
          messages="737"
          shares="130"
        />
        <Video
          links={video5}
          channel="Mr. Beast"
          description="Homeless"
          song="Please like share and Subscribe"
          likes="5098"
          messages="37"
          shares="13"
        />
        <Video
          links={video6}
          channel="narcos"
          description="Documentary"
          song="Please like share and Subscribe"
          likes="598"
          messages="37"
          shares="13"
        />
        <Video
          links={video7}
          channel="Pablo Escobar"
          description="Comedy"
          song="Please like share and Subscribe"
          likes="567"
          messages="37"
          shares="13"
        />
      </div>
    </div>
  );
}

export default App;
