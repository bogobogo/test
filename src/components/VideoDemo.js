import React, { Component } from 'react';
import androidMock from '../img/android-mock.png'
import iphoneMock from '../img/iphone-mock.png'
import androidIcon from '../img/android-black-icon.svg'
import iphoneIcon from '../img/apple-black-icon.svg'

class VideoDemo extends Component {
  constructor(props){
    super(props)
    this.state = { showVideo: 'ios', mobile: (window.innerWidth < 500)}
  }

  componentDidMount() {
      ((this.props.playing == this.props.project) && !this.state.mobile) ? this.playVideo() : this.pauseVideo()
  }

  componentDidUpdate() {
      ((this.props.playing == this.props.project) && !this.state.mobile) ? this.playVideo() : this.pauseVideo()
  }
  changeVideo(os) {
        (os === 'android') ?  this.setState({showVideo: 'android'}) :  this.setState({showVideo: 'ios'})
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
            <div className="project-video-div" style={(this.state.showVideo === 'ios') ? styles.iphoneMockImg : styles.androidMockImg}>
            <video playsInline={true} ref="vidRef" className={"project-video-iphone"} height="320" width="180"  muted="" loop={true} autoPlay>
            <source src={(this.state.showVideo === 'ios') ? this.props.IOSVideoUrl : this.props.AndroidVideoUrl} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
             : <div  className="project-video-div" style={styles.androidMockImg}>
            <video playsInline={true} ref="vidRef"  className="project-video-android" height="320" width="180"  muted="" loop={true} autoPlay>
            <source src={this.props.AndroidVideoUrl} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div> }
            {(this.props.AndroidVideoUrl && this.props.IOSVideoUrl)  && 
            <div className="project-icons-container">
                 <img className="apple-icon" onClick={() => this.changeVideo('ios')} style={(this.state.showVideo === 'android') ? {opacity: 0.4} : {opacity: 1}} src={iphoneIcon} />  
                 <img className="android-icon" onClick={() => this.changeVideo('android')} style={(this.state.showVideo === 'ios') ? {opacity: 0.4} : {opacity: 1}} src={androidIcon} />
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
