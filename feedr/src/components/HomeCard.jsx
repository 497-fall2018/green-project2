import React, { Component } from 'react';
//import StartButton from './StartButton';
import RestCard from './RestCard';
import Autocomplete from 'react-google-autocomplete';

class HomeCard extends Component {

  constructor(props){
    super(props);
    console.log(this.props.firstTime);
    this.clickFunc = this.clickFunc.bind(this);

  }

  generateText(){
    if (this.props.firstTime){
      return 'SEE OUR CHOICES'
    }
    return 'RESTART'
  }

  generateTitleText(){
    if (this.props.firstTime){
      return 'Welcome.'
    }
    return 'Uh oh...'
  }

  generateSubtitleText(){
    if (this.props.firstTime){
      return <div dangerouslySetInnerHTML={{__html:"feedr is a new type of restaurant app. <br/><br/> We help you find the right place to eat without the overwhelming maps and lists.<br/><br/>"}}></div>
    }
    return 'Looks like you\'re all out of restaurants! Click below to start over.'
  }

  clickFunc() {
    this.props.sendRequest()
    setTimeout(() => {
      this.props.generateCards()
    }, 5000);  }

  render() {
      return (
        <div className='cardContainer'>
          <div className='cardTitle homecardTitle'>{this.generateTitleText()}</div>
          <div className='cardSubtitle homeCardSubtitle'>{this.generateSubtitleText()}</div>


          {this.props.firstTime === true ? <div>
          <Autocomplete className="location" onChange={this.props.setLocation} style={{width: '90%'}} onPlaceSelected={this.props.setAutocompleteLocation} componentRestrictions={{country: "us"}}/>
          </div> :null}


          <button className='button2' onClick={this.clickFunc}>{this.generateText()}</button>
        </div>
        )
  }
}

export default HomeCard;
