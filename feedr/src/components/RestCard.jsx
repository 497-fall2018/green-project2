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
        <img className='cardImg' src={this.props.restImg} alt='swipe-demo' />
        <div className='ourChoice'>OUR CHOICE:</div>
          <div className='cardTitle'>{this.props.restName}</div>
          <div className="ourChoice address">{this.props.restAddr}</div>
          <div className='cardSubtitle'>{this.props.restDescription}</div>
          <button className="button1" onClick={()=>this.changeCardClass()}>NO THANKS</button>
        </div>
      </div>
    );
  }
}

export default RestCard;
