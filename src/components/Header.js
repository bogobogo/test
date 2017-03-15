import React, { Component } from 'react';
import logo from '../img/logo.png'

class Header extends Component {

  render() {
    return (
        <div>
       <section className="wix-page-header">
           <header>
                <img alt="wix-logo" src={logo} className="main-logo"/>
            </header>
            <div className="header-title-container">
             
            
            <h1 className="top-title">Mobile Open Source</h1>
            <h2 className="project-tagline">Bringing the Native Back to React</h2>
        </div>
        </section>
         
        </div>
      
    );
  }
}

export default Header;
