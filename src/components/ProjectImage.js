import React, { Component } from 'react';
import androidBlog from '../img/android-blog.png'

class ProjectImage extends Component {
  constructor(props){
    super(props)
 }

  render() {
    return (
       <div className="project-media-container">
           <img className="project-video-div" src={androidBlog}/>
       </div>
    );
  }
}

export default ProjectImage;
