import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import VideoList from './Components/VideoList';
import VideoPlayer from './Components/VideoPlayer';
import SearchBar from './Components/SearchBar';
function YoutubeHome() {

    const [videos, setVideos] = useState({
        list: []
    })
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        makeAPICalltoYoutube('cricket');
    }, [])

    const makeAPICalltoYoutube = (searchTerm) => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCSgnlRnog2MLQJbniNybtlLredPGot2_U&q=${searchTerm}&type=video&maxResults=10`).then(
            response => {
                console.log(response.data.items);
                setVideos({ list: response.data.items });
                setSelectedVideo(response.data.items[0]);
            },
            error => {
                console.log("error", error);
            }
        )
    }

    const getSelectedVideoFromVideoList = (video) => {
        setSelectedVideo(video);
    }
    return (
        <div className="App">
            <SearchBar onSearchTerm={
                (searchTermParam) => {
                    makeAPICalltoYoutube(searchTermParam);
                }
            }></SearchBar> <br></br><br></br>
            <VideoPlayer video={selectedVideo}></VideoPlayer>
            <VideoList videos={videos.list} onVideoClick={(userClickedVideo) => {
                getSelectedVideoFromVideoList(userClickedVideo);
            }}></VideoList>

        </div>
    );
}
export default YoutubeHome;


/*

   Page (index.html)-> App Component -> useEffect( () =>{
     // code for componentdidmount()
   })

*/