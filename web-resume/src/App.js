import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Media from './components/media/Media'
import Footer from './components/footer/Footer';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
     <Navbar/>
     <Media/>
    <Footer/>
    </div>
    );
  }
}

export default App;
