import React, { Component } from 'react';
import StartButton from './StartButton';
import RestCard from './RestCard';

class HomeCard extends Component {

  constructor(props){
    super(props);
    console.log(this.props.firstTime);
    // this.tempList = ['chipotle','panera']
    // this.state = {
    //   firstTime: true
      // cardsGenerated: false,
      // numCards: 0
    // }
  }

  // generateCards(){
  //   console.log('generateCards')
  //   this.setState({
  //     firstTime:false,
  //     cardsGenerated: true,
  //     numCards: this.tempList.length
  //   })

  // }

  generateTitleText(){
    if (this.props.firstTime){
      return 'Welcome.'
    }
    return 'Uh oh...'
  }

  generateSubtitleText(){
    if (this.props.firstTime){
      return 'feedr is a new type of restaurant app. We help you find the food you are looking for, without the overwhelming lists.'
    }
    return 'looks like you are all out of restaurants! click below to start over.'
  }

  // noThanks(){
  //   this.setState({
  //     numCards: this.state.numCards-1
  //   })
  // }



  render() {
    // console.log(this.state.numCards)
    // var cardStack = []

    // if (this.state.cardsGenerated){
    //   cardStack = this.tempList.map((rest,i)=>{
    //     console.log(rest)
    //     return(<RestCard key={i} restName={rest} restDescription='test string' noThanks={()=>this.noThanks()}/>)
    //   })
    // }

    // if (this.state.numCards === 0){
    //   cardStack = [];
    // }

      return (
        <div className='cardContainer'>
          <div className='cardTitle'>{this.generateTitleText()}</div>
          <div className='cardSubtitle'>{this.generateSubtitleText()}</div>
          <img className='cardImg' src='/img/homecard.png' alt='swipe-demo' />
          <StartButton firstTime={this.props.firstTime} generateCards={()=> this.props.generateCards()}/>
        </div>
        )
  }
}

export default HomeCard;
