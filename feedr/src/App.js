import React, { Component } from 'react';
import './App.css';
import Headbar from './components/Headbar';
import HomeCard from './components/HomeCard';
import RestCard from './components/RestCard';

class App extends Component {
  constructor(props){
    super(props);
    this.tempList = ['chipotle','panera']
    this.state = {
      firstTime: true,
      cardsGenerated: false,
      numCards: 0
    }
  }

  generateCards(){
    console.log('generateCards')
    this.setState({
      firstTime: false,
      cardsGenerated: true,
      numCards: this.tempList.length
    })

  }

  noThanks(){
    this.setState({
      numCards: this.state.numCards-1
    })
  }

  render() {
    var cardStack = []

    if (this.state.cardsGenerated){
      cardStack = this.tempList.map((rest,i)=>{
        console.log(rest)
        return(
            <RestCard key={i} restName={rest} restDescription='This is one of the best places for pizza I have found in the city. Their double decker pizza is AMAZING! I have ordered from here a few times and everytime Im impressed.' noThanks={()=>this.noThanks()} />
          )
      })
    }

    if (this.state.numCards === 0){
      cardStack = [];
    }

    return (
      <div>
        <Headbar />
        <HomeCard firstTime={this.state.firstTime} generateCards={()=> this.generateCards()}/>
        {cardStack}
      </div>
    );
  }
}

export default App;
