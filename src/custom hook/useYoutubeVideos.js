import { useEffect, useState } from "react";
import Youtube from "../api/youtube";

const useYoutubeVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const res = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(res.data.items);
  };
  return [videos, search];
};

export default useYoutubeVideos;
