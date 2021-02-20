import React from "react";
import "./VideoFooter.css";
import MusicNoteRoundedIcon from "@material-ui/icons/MusicNoteRounded";
import Ticker from "react-ticker";
function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@kaushal</h3>
        <p>This is some desc...</p>
        <div className="videoFooter_ticker">
          <MusicNoteRoundedIcon className="videoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>This song is currently playing</p>
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
