import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import VideoList from './Components/VideoList';
function App() {

  const [videos, setVideos] = useState({
    list: []
  })

  useEffect(() => {
    axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD_CY47dJMfzlROPUDs6hxZRSBwX2Jz4X0&q=cricket&type=video&maxResults=10").then(
      response => {
        console.log(response.data.items);
        setVideos({ list: response.data.items });
      },
      error => {
        console.log("error", error);
      }
    )
  }, [])
  return (
    <div className="App">
      {videos.list.length}
      <VideoList videos={videos.list}></VideoList>
    </div>
  );
}

export default App;
