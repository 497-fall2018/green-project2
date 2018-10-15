import React, { Component } from 'react';
import StartButton from './StartButton';
import RestCard from './RestCard';

class HomeCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstTime: true
    }
  }

  generateCards(){
    console.log('generateCards')
    this.setState({firstTime:false})
    const tempList = [
      'chipotle','panera'
    ]
    console.log(tempList)
    const cardStack = tempList.map((rest)=>{
      console.log(rest)
      //call RestCard component and pass necessary props
    })
  }

  generateTitleText(){
    if (this.state.firstTime){
      return 'Welcome.'
    }
    return 'Uh oh...'
  }

  generateSubtitleText(){
    if (this.state.firstTime){
      return 'feedr is a new type of restaurant app. We help you find the food you are looking for, without the overwhelming lists.'
    }
    return 'looks like you are all out of restaurants! click below to start over.'
  }



  render() {
    return (
      <div>
        <div className='cardContainer'>
          <div className='cardTitle'>{this.generateTitleText()}</div>
          <div className='cardSubtitle'>{this.generateSubtitleText()}</div>
          <img className='cardImg' src='/img/homecard.png' alt='swipe-demo' />
          <StartButton firstTime={this.state.firstTime} generateCards={()=> this.generateCards()}/>
        </div>
      </div>
    );
  }
}

export default HomeCard;
