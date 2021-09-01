import React from "react";

// child komponenta
//uzima video iz parent komponente VideoList

// thumbnail resizing
//

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      ></img>
      <div className="content">
        <h3 className="header">{video.snippet.title}</h3>
      </div>
    </div>
  );
};
export default VideoItem;
