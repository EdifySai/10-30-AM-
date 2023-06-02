
function VideoList(props) {

    // iterate the list of videos and display the images of the videos in the form of bootstrap cards

    return (
        <div>
            <h1>Video List </h1>
            {props.videos.length}
        </div>
    )

}
export default VideoList;