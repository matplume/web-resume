import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuNav from './Components/MenuNav/MenuNav';
import Media from './Components/Media/Media';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Experience from './Components/Experience/Experience';





class App extends Component {
  render() {
    return (
      <div>
        <MenuNav/>
        <Media/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Experience/>
      </div>
    );
  }
}

export default App;
