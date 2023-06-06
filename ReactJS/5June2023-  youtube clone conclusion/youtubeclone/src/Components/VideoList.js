
function VideoList(props) {
    console.log("props", props.videos);
    const renderVideoList = () => {
        var list = props.videos.map(video => {
            return <li onClick={() => props.onVideoClick(video)} key={video.etag}><img style={{ cursor: 'pointer' }} src={video.snippet.thumbnails.medium.url}></img></li>
        })
        return list;
    }
    // iterate the list of videos and display the images of the videos in the form of bootstrap cards
    return (
        <div>
            <ul style={{ listStyleType: 'none' }}>
                {renderVideoList()}
            </ul>
        </div>
    )
}
export default VideoList;