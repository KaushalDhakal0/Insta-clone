import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);
  const [countLikes, setCountLikes] = useState(likes);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {liked ? (
          <FavoriteIcon fontSize="large" style={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => {
              setLiked(true);
              setCountLikes(countLikes + 1);
            }}
          />
        )}
        <p>{countLikes}</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
