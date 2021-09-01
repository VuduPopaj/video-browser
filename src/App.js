import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import useYoutubeVideos from "./custom hook/useYoutubeVideos";
import "./index.css";
import "semantic-ui-css/semantic.css";
// custom hooks reactjs.org

//useEffect - svaki put kada se mijenja video komponenta je mounted

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useYoutubeVideos("pink floyd");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <h1 style={{ margin: "2vh" }}>Feel free to browse through the videos</h1>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
