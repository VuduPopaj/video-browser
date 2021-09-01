import React from "react";

//  iframe za PinkFloyd: <iframe width="560" height="315" src="https://www.youtube.com/embed/WAUiHImStdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

const VideoDetail = ({ video }) => {
  if (!video) {
    return <p>Loading...</p>;
  }

  const sourceVideo = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail ui segment">
      <div className="ui embed">
        <iframe
          allowFullScreen
          src={sourceVideo}
          title={video.snippet.title}
        ></iframe>
      </div>
      <h1 className="ui header">{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  );
};
export default VideoDetail;
