import React, { Component } from 'react';

class RestProfile extends Component {

  constructor(props){
    super(props);
    this.state = {
      displayed: false
    }
    
  }

  changeCardClass(){
    this.setState({
      displayed: false
    })
     {this.props.closeRestProfile()}
  }

  cardClass(){
    if (this.props.displayed){
      return 'restProfileContainer'
    }
    return 'restProfileDisplayNone'
  }

  isClosed(){
  	if (this.props.restIsClosed){
  		return "Closed"
  	}
  	else{
  		return "Open"
  	}
  }

  render() {
    return (
      <div>
        <div className={this.cardClass()} style={{zIndex:'999'}}>
        <div className='yourChoice'>YOUR CHOICE:</div>
        <div className='cardTitle'>{this.props.restName}</div>
        <img className='restProfileImg' src={this.props.restImg} alt='rest-chosen' />
          <div className="restProfileDescription">Location: {this.props.restAddr}</div>
          <div className="restProfileDescription">Phone: {this.props.restPhone}</div>
          <div className="restProfileDescription">{this.isClosed()}</div>
          <div className="restProfileDescription">Price: {this.props.restPrice}</div>
          <div className="restProfileDescription">Rating: {this.props.restRating}</div>
          <button className="button1" onClick={()=>this.changeCardClass()}>CLOSE</button>
        </div>
      </div>
    );
  }
}

export default RestProfile;