import React, { Component } from 'react';
import androidMock from '../img/android-mock.png'
import iphoneMock from '../img/iphone-mock.png'
import androidIcon from '../img/android-black-icon.svg'
import iphoneIcon from '../img/apple-black-icon.svg'

class VideoDemo extends Component {
  constructor(props){
    super(props)
    this.state = { showVideo: 'ios'}
  }

  playVideo() {
    this.refs.vidRef.play()
  }

  pauseVideo() {
      this.refs.vidRef.pause()
  }

  render() {
    return (
        <div className="project-media-container">
            
            {(this.props.IOSVideoUrl) ? 
            <div onMouseEnter={this.playVideo.bind(this)} onMouseLeave={this.pauseVideo.bind(this)}  className="project-video-div" style={(this.state.showVideo === 'ios') ? styles.iphoneMockImg : styles.androidMockImg}>
            <video ref="vidRef" className={"project-video-iphone"} height="320" width="180"  muted="" loop={true}>
            <source src={(this.state.showVideo === 'ios') ? this.props.IOSVideoUrl : this.props.AndroidVideoUrl} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
             : <div  className="project-video-div" style={styles.androidMockImg}>
            <video ref="vidRef" className="project-video-android" height="320" width="180"  muted="" loop={true}>
            <source src={this.props.AndroidVideoUrl} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div> }
            {(this.props.AndroidVideoUrl && this.props.IOSVideoUrl)  && 
            <div className="project-icons-container">
                 <img className="apple-icon" onClick={this.props.changeVideo('ios').bind(this)} style={(this.state.showVideo === 'android') ? {opacity: 0.4} : {opacity: 1}} src={iphoneIcon} />  
                 <img className="android-icon" onClick={this.props.changeVideo('android').bind(this)} style={(this.state.showVideo === 'ios') ? {opacity: 0.4} : {opacity: 1}} src={androidIcon} />
            </div> }
        </div>
    );
  }
}

const styles = {
    iphoneMockImg : {
        width: 243,
        height: 417,
        background: `url(${iphoneMock}) no-repeat top left transparent`   
    },
    androidMockImg: {
        width: 243,
        height: 417,
        background: `url(${androidMock}) no-repeat top left transparent`
    }
}
// (this.state.showVideo) && {opacity: 0.4}
export default VideoDemo;
