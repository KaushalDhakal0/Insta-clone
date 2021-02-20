import React, { useRef, useState } from "react";
import "./Video-css.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ vdo }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoClick = () => {
    //stop if playing and vice versa
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={handleVideoClick}
      >
        <source src={vdo} type="video/mp4"></source>
      </video>
      <VideoFooter />
      <VideoSidebar className="sidebar" />
    </div>
  );
}

export default Video;
