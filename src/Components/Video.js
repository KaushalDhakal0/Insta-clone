import React, { useRef, useState } from "react";
import "./Video-css.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ links, channel, description, song, likes, messages, shares }) {
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
        <source src={links} type="video/mp4"></source>
      </video>
      <VideoFooter
        channelName={channel}
        description={description}
        song={song}
      />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
