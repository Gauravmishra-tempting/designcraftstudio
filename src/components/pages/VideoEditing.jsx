import React from 'react'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ReactPlayer from "react-player";

const VideoEditing = () => {
  return (
    <>
    <Navbar/>
    <div className="container" style={{marginTop: "100px"}}>
      <h1 className="text-center mb-5 mt-4">Video Editing</h1>
      <div className="mt-3 mb-4">
      <ReactPlayer
        url="https://youtu.be/yey2fBaPh2g"
        controls
        width="100%"
      />
      </div>
    <div className="row g-4">
      <div className="col-md-4">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=pSzxTJ_21IA"
        controls
        width="100%"
      />
      </div>
      <div className="col-md-4">
      <ReactPlayer
        url="https://youtube.com/shorts/bALO5geXXX0"
        controls
        width="100%"
      />
      </div>
      <div className="col-md-4">
      <ReactPlayer
        url="https://youtube.com/shorts/qHVz2OXiWs8"
        controls
        width="100%"
      />
      </div>
    </div>

    <div className="row mt-2 g-4">
      <div className="col-md-4">
      <ReactPlayer
        url="https://youtube.com/shorts/ZMNwg0iH660"
        controls
        width="100%"
      />
      </div>
      <div className="col-md-4">
      <ReactPlayer
        url="https://youtube.com/shorts/z-4foUo4z8c"
        controls
        width="100%"
      />
      </div>
      <div className="col-md-4">
      <ReactPlayer
        url="https://youtu.be/yey2fBaPh2g"
        controls
        width="100%"
      />
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default VideoEditing