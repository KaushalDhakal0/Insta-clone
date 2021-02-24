import React from "react";
import "./VideoFooter.css";
import MusicNoteRoundedIcon from "@material-ui/icons/MusicNoteRounded";
import Ticker from "react-ticker";
function VideoFooter({ channelName, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channelName}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteRoundedIcon className="videoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
        className="videoFooter_record"
      />
    </div>
  );
}

export default VideoFooter;
