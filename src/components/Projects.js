import React, { Component } from 'react';
import androidImage from '../img/android-camera.png'
import appStoreBadge from '../img/app-store-badge.svg'
import playStoreBadge from '../img/google-play-badge.svg'
import VideoDemo from './VideoDemo.js'
import ProjectImage from './ProjectImage'

const ProjectsDemoAppLink = ({p}) => (
        <div className="project-demoapp-links-container"> 
            {(p.AndroidDemoAppLink || p.IOSDemoAppLink) && <div className="download-demo-title-container"><h5 className="download-demo-title"> Download Demo </h5></div>}
            {p.AndroidDemoAppLink && <a className="project-demoapp-link" href="#"><img className="project-demoapp-img" src={appStoreBadge}></img></a>}
            {p.IOSDemoAppLink && <a className="project-demoapp-link" href="#"><img className="project-demoapp-img" src={playStoreBadge}></img></a>}
        </div>  
    )


class Projects extends Component {
  constructor(props){
    super(props)
    this.state = {width: window.innerWidth, playing: this.props.projectsData.projectList[0]}
    console.log(this.props.projectsData.projectList[0])
    window.addEventListener("orientationchange", this.updateStateOnOrientation.bind(this))
  }

  switchVideo(project){
        console.log(project)
        this.setState({playing: project})
  }

  updateStateOnOrientation(){
    console.log('orientation change')
    this.setState({width: window.innerWidth})
  }

  render() {
    return (
       <section className="projects-container">
           {this.props.projectsData.projectList.map(project => {
               let p = this.props.projectsData[project];
               return (
                   <div onMouseEnter={() => this.switchVideo(project)} key={project} className="project">
                        <div className='project-text-container'>
                        <h2 className="project-title">{p.title}</h2>
                        <p className="project-description">{p.description}</p>
                        <a className="project-github-link"href={p.github}>View on Github ></a>
                         {(this.state.width > 500) && <ProjectsDemoAppLink p={p}/>}
                        </div> 
                        {(p.AndroidVideoUrl || p.IOSVideoUrl) && <VideoDemo project={project} playing={this.state.playing} AndroidVideoUrl={p.AndroidVideoUrl} IOSVideoUrl={p.IOSVideoUrl}/>}
                        {(p.Image && (!(p.AndroidVideoUrl || p.IOSVideoUrl))) && <ProjectImage/>}
                        {(this.state.width <= 500) && <ProjectsDemoAppLink p={p}/>}
                    </div>
               )
           })}
       </section>
    );
  }
}

export default Projects;
