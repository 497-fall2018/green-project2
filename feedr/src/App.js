import React, { Component } from 'react';
import './App.css';
import Headbar from './components/Headbar';
import HomeCard from './components/HomeCard';

class App extends Component {
  render() {
    return (
      <div>
        <Headbar />
        <HomeCard />
      </div>
    );
  }
}

export default App;
