
const VideoFullScreen = () => {
    return (
        <div className="w-screen h-screen absolute z-[-1] opacity-75">
            <video src="/BigBuckBunny.mp4" autoPlay muted className="w-full h-full object-cover object-center"></video>
            {/*<img className="w-full h-full object-cover object-center" src="/img.png" alt="l"/>*/}
        </div>
    )
}

export default VideoFullScreen