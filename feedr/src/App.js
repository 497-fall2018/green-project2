import React, { Component } from 'react';
import './App.css';
import Headbar from './components/Headbar';
import HomeCard from './components/HomeCard';
import RestCard from './components/RestCard';

class App extends Component {
  constructor(props){
    super(props);
    this.tempList = ['Joy Yee Noodle', '10Q Chicken']
    this.imgList = ['/img/jy.jpg', '/img/10q.jpg']
    this.descList = ['BYOB eatery offers an extensive menu of Pan-Asian offerings & smoothies in a basic setting.', 'Specializing in fried chicken, 10Q serves up chicken tenders, wings, sandwiches, bowls and combo platters with a variety of sauces available. Sides include bacon ranch cheese fries, white rice, pickled jalapenos and more.']
    this.addrList = ['519 Davis St', '816 Church St']
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
        console.log(i)
        return(
            <RestCard key={i} restName={rest} restDescription={this.descList[i]} restImg={this.imgList[i]} restAddr = {this.addrList[i]} noThanks={()=>this.noThanks()} />
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
