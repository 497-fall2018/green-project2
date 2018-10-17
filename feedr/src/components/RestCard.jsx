import React, { Component } from 'react';
import StartButton from './StartButton';

class RestCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      displayed: true
    }
  }

  changeCardClass(){
    this.setState({
      displayed: false
    })
    {this.props.noThanks()}
  }

  cardClass(){
    if (this.state.displayed){
      return 'restCardContainer'
    }
    return 'restCardDisplayNone'
  }

  render() {
    return (
      <div>
        <div className={this.cardClass()} style={{zIndex:'999'}}>
          <div className='cardTitle'>{this.props.restName}</div>
          <div className='cardSubtitle'>{this.props.restDescription}</div>
          <img className='cardImg' src='/img/homecard.png' alt='swipe-demo' />
          <button onClick={()=>this.changeCardClass()}>no thanks</button>
        </div>
      </div>
    );
  }
}

export default RestCard;
