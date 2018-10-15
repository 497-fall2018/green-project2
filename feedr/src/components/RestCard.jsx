import React, { Component } from 'react';
import StartButton from './StartButton';

class HomeCard extends Component {

  render() {
    return (
      <div>
        <div className='cardContainer' style={{zIndex:'999'}}>
          <div className='cardTitle'>{this.props.restName}</div>
          <div className='cardSubtitle'>{this.props.restDescription}</div>
          <img className='cardImg' src='/img/homecard.png' alt='swipe-demo' />
        </div>
      </div>
    );
  }
}

export default HomeCard;
