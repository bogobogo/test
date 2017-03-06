import React, { Component } from 'react';
import androidImage from '../img/android-camera.png'
import appStoreBadge from '../img/app-store-badge.svg'
import playStoreBadge from '../img/google-play-badge.svg'

import VideoDemo from './VideoDemo.js'

class Projects extends Component {
  constructor(props){
    super(props)
  }

  changeVideo(os) {
      return function(){
        (os === 'android') ?  this.setState({showVideo: 'android'}) :  this.setState({showVideo: 'ios'})
        }
  }

  render() {
    return (
       <section className="projects-container">
           {this.props.projectsData.projectList.map(project => {
               let p = this.props.projectsData[project];
               console.log(this.changeVideo);
               return (
                   <div key={project} className="project">
                        <h2 className="project-title">{p.title}</h2>
                        <p className="project-description">{p.description}</p>
                        <a className="project-github-link"href={p.github}>View on Github ></a>
                        {p.videoUrl && <VideoDemo changeVideo={this.changeVideo}/> }
                        <div className="project-demoapp-links-container"> 
                        {p.AndroidDemoAppLink && <a className="project-demoapp-link" href="#"><img src={appStoreBadge}></img></a>}
                        {p.IOSDemoAppLink && <a className="project-demoapp-link" href="#"><img src={playStoreBadge}></img></a>}
                        </div>
                    </div>
               )
           })}
            

       </section>
    );
  }
}

export default Projects;

{/*<div className="project">
                <h2 className="project-title">{this.state.project1.title}</h2>
                <p className="project-description">{this.state.project1.description}</p>
                <a className="project-github-link"href={this.state.project1.github}>View on Github ></a>
                <img className="project-video" src={androidImage}/>
            </div>
            <div className="project">
                <h2 className="project-title">{this.state.project1.title}</h2>
                <p className="project-description">{this.state.project1.description}</p>
                <a className="project-github-link"href={this.state.project1.github}>View on Github ></a>
                <img className="project-video" src={androidImage}></img>
            </div>
           <div className="project">
                <h2 className="project-title">{this.state.project1.title}</h2>
                <p className="project-description">{this.state.project1.description}</p>
                <a className="project-github-link"href={this.state.project1.github}>View on Github ></a>
                <img className="project-video" src={androidImage}></img>
            </div>*/}