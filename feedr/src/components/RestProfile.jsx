import React, { Component } from 'react';
import GoogleMap1 from './GoogleMap';

class RestProfile extends Component {

  constructor(props){
    super(props);
    this.state = {
      displayed: false,      
      mapShowStatus : false
    }

  }

  changeCardClass(){
    this.setState({
      displayed: false
    })
     {this.props.closeRestProfile()}
  }

  mapShow(){
    this.setState({
      mapShowStatus : true 
    },function(){
      console.log(this.state.mapShowStatus)
    })
  }

  mapClose(){
    this.setState({
      mapShowStatus : false 
    },function(){
      console.log(this.state.mapShowStatus)
    })
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

  getPhoneNumber(){
    return "tel:"+this.props.restPhone
  }

  render() {

    if(this.state.mapShowStatus === false){
      console.log(this.state.mapShowStatus)

    return (
      <div className="rest-profile-container">
        <div className={this.cardClass()} style={{zIndex:'999'}}>
        <div className='yourChoice'>YOUR CHOICE:</div>
        <div className='profcardTitle'>{this.props.restName}</div>
          <div className="restProfileDescription">Location: {this.props.restAddr}</div>
          <div className="restProfileDescription">Phone: {this.props.restPhone}</div>
          <div className="restProfileDescription">Price: {this.props.restPrice}</div>
          <div className="restProfileDescription">Rating: {this.props.restRating} / 5 stars</div>
         
          <button style={{fontSize:'25px', textAlign:'center'}} onClick={()=>this.mapShow()}>GO</button>
          <a href={this.getPhoneNumber()}><button className="buttonCall">Call</button></a>
          <button className="button1" onClick={()=>this.changeCardClass()}>CLOSE</button>
        </div>
      </div>
    );
    }

    return(
      <div>
      <GoogleMap1 mapClose={this.mapClose.bind(this)} userLat={this.props.userLat} userLng={this.props.userLng} restLat={this.props.restLat} restLng={this.props.restLng}></GoogleMap1>
      </div>
    )

  }
}

export default RestProfile;
