import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './new.css';

import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'

// import projects from './projects.js'
import projectsData  from '../scripts/webscrap.js'
console.log(projectsData)
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Projects projectsData={projectsData}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
