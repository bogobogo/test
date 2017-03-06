import React, { Component } from 'react';
import dash from '../img/dash.png'
import logo from '../img/logo.png'

class Header extends Component {
  constructor(props){
    super(props)
 }

  render() {
    return (
       <section className="wix-page-header">
         <div className="wix-page-container">
            <img src={logo} className="main-logo"/>
            <h1 className="top-title">Mobile Open Source</h1>
            <h2 className="project-tagline">Production Ready Open Source Projects</h2>
            <div className="dash-image-div">
                <img className="dash-image" src={dash}/>
            </div>
          </div>
      </section>
    );
  }
}

export default Header;
