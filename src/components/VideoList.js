import React from "react";
import VideoItem from "./VideoItem";

// Renderuje listu videa
// Parent VideoList, child VideoItem (props)

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      video={video}
      key={video.id.videoId}
    />
  ));
  return (
    <div className="video-list ui relaxed divided list">{renderedList}</div>
  );
};

export default VideoList;
