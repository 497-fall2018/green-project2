import React, { Component } from 'react';
import StartButton from './StartButton';
import RestCard from './RestCard';

class HomeCard extends Component {

  constructor(props){
    super(props);
    console.log(this.props.firstTime);
  }

  generateTitleText(){
    if (this.props.firstTime){
      return 'Welcome.'
    }
    return 'Uh oh...'
  }

  generateSubtitleText(){
    if (this.props.firstTime){
      return <div dangerouslySetInnerHTML={{__html:"feedr is a new type of restaurant app. <br/><br/> We help you find the food you're looking for without the overwhelming maps and lists.<br/><br/>"}}></div>
    }
    return 'Looks like you\'re all out of restaurants! Click below to start over.'
  }

  render() {
      return (
        <div className='cardContainer'>
          <img className='cardImg' src='/img/avocado.jpg' alt='swipe-demo' />
          <div className='cardTitle homecardTitle'>{this.generateTitleText()}</div>
          <div className='cardSubtitle homeCardSubtitle'>{this.generateSubtitleText()}</div>
          <StartButton firstTime={this.props.firstTime} generateCards={()=> this.props.generateCards()}/>
        </div>
        )
  }
}

export default HomeCard;
