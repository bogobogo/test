import React, { Component } from 'react';
import dash from '../img/dash.png'
import logo from '../img/logo.png'

class Header extends Component {
  constructor(props){
    super(props)
 }

  render() {
    return (
        <div>
       <section className="wix-page-header">
           <header>
                <img src={logo} className="main-logo"/>
            </header>
            <div className="wix-page-container">
             
            
            <h1 className="top-title">Mobile Open Source</h1>
            <h2 className="project-tagline">We Are Contributing All of Our React Native Stack to the Community. <br/> All MIT. All Maintained.</h2>
        </div>
        </section>
         
        </div>
      
    );
  }
}

export default Header;
