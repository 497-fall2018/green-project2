import React, { Component } from 'react';
import './App.css';
import Headbar from './components/Headbar';
import HomeCard from './components/HomeCard';
import RestCard from './components/RestCard';
import RestProfile from './components/RestProfile';
import Swipeable from 'react-swipeable';

// import axios from 'axios';
import Draggable from 'react-draggable';
// import YelpApi from 'v3-yelp-api';

class App extends Component {
  constructor(props){
    super(props);

// this.tempList = ['Joy Yee Noodle', '10Q Chicken']
// this.imgList = ['/img/jy.jpg', '/img/10q.jpg']
// this.descList = ['BYOB eatery offers an extensive menu of Pan-Asian offerings & smoothies in a basic setting.', 'Specializing in fried chicken, 10Q serves up chicken tenders, wings, sandwiches, bowls and combo platters with a variety of sauces available. Sides include bacon ranch cheese fries, white rice, pickled jalapenos and more.']
// this.addrList = ['519 Davis St', '816 Church St']


    // axios.get('/restaurant/data')
    // .then(res=>{
    //   if(res.status===200){
    //      console.log(res.data);
    //      this.tempList=[];
    //      this.imgList=[];
    //      this.descList=[];
    //      this.addrList=[];
    //      var i;
    //      for (i =0; i< res.data.length; i++){
    //       this.tempList.push(res.data[i]["temp"]);
    //       this.imgList.push(res.data[i]["img"]);
    //       this.descList.push(res.data[i]["desc"]);
    //       this.descList.push(res.data[i]["addr"]);
    //      }
    //    }
    //    })

    this.tempList = []
    this.imgList = []
    this.descList = []
    this.addrList = []
    this.isClosedList = []
    this.phoneList = []
    this.priceList = []
    this.ratingList = []


    this.location = "Evanston"
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = proxyurl + 'https://api.yelp.com/v3/businesses/search?location=' + this.location;
    var bearer_token = "h-92ctgESgaQnU1snhIDjHp997zk4U0YAP13T1fps98DT14y4AlTW3bmUoqf1A1HHPDjH2-snhdttnUUF1gupBtFDDP8CF7KRcYb1s2qzKb5Y32EirPW69uVMwLaW3Yx"
    var bearer = 'Bearer '+ bearer_token;
    var obj = {
      method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Authorization': bearer,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true'
      }
    }

    this.GetRestaurants(url, obj)

    this.state = {
      firstTime: true,
      cardsGenerated: false,
      restChosen: false,
      numCards: 0,
      chosenRestIndex: 0
    }
    this.child = React.createRef();
  }

  GetRestaurants(url, obj) {
    fetch(url, obj)
      .then(results => {
        return results.json()
      }).then(data => {
        console.log(data.businesses)

        data.businesses.map((restaurant) => {
          this.tempList.push(restaurant.name)
          this.imgList.push(restaurant.image_url)
          this.descList.push(restaurant.name)
          this.addrList.push(restaurant.location.display_address)
          this.isClosedList.push(restaurant.is_closed)
          this.phoneList.push(restaurant.phone)
          this.priceList.push(restaurant.price)
          this.ratingList.push(restaurant.rating)
        })
      });
  }


  generateCards() {
    console.log('generateCards');
    this.setState({
      firstTime: false,
      cardsGenerated: true,
      numCards: this.tempList.length
    });

  }

  noThanks(){
    this.setState({
      numCards: this.state.numCards-1
    })
  }

  closeRestProfile(){
    this.setState({
      restChosen: false
    })
  }

  swiping(e, deltaX, deltaY, absX, absY, velocity) {
    console.log("You're Swiping...", e, deltaX, deltaY, absX, absY, velocity)
  }

  swipingLeft(e, absX) {
    console.log("You're Swiping to the Left...", e, absX)
  }

  swiped(e, deltaX, deltaY, isFlick, velocity) {
    console.log("You Swiped...", e, deltaX, deltaY, isFlick, velocity)
  }

  swipedUp(e, deltaY, isFlick) {
    console.log("You Swiped Up...", e, deltaY, isFlick)
  }

  onSwiped(direction, index) {
    console.log('ryan just swiped ',direction)
    if(direction==='LEFT'){
      this.noThanks()
      this.child.current.changeCardClass();
    }
    if(direction==='RIGHT'){
      this.setState({
        restChosen: true,
        cardsGenerated: false,
        chosenRestIndex: index
      });
    }
  }

  render() {
    var cardStack = []

    if (this.state.cardsGenerated){
      cardStack = this.tempList.map((rest,i)=>{
        return(
          <Swipeable
            onSwiping={this.swiping}
            onSwipingLeft={this.swipingLeft}
            onSwiped={this.swiped}
            onSwipedUp={this.swipedUp}
            trackMouse
            preventDefaultTouchmoveEvent
            onSwipedLeft={() => this.onSwiped('LEFT')}
            onSwipedRight={() => this.onSwiped('RIGHT', i)} >
              <Draggable>
                <div>
                  <RestCard ref={this.child} key={i} restName={rest} restDescription={this.descList[i]} restImg={this.imgList[i]} restAddr = {this.addrList[i]} noThanks={()=>this.noThanks()} />
                </div>
              </Draggable>
          </Swipeable>
          )
      })
    }


    if (this.state.numCards === 0){
      cardStack = [];
    }

    var c = this.state.chosenRestIndex
    return (
      <div>
        <Headbar />
        <HomeCard firstTime={this.state.firstTime} generateCards={()=> this.generateCards()} />
        {cardStack}
        <RestProfile displayed = {this.state.restChosen} 
          restName = {this.tempList[c]} 
          restDescription = {this.descList[c]} 
          restImg = {this.imgList[c]} 
          restAddr = {this.addrList[c]} 
          restIsClosed = {this.isClosedList[c]} 
          restPhone = {this.phoneList[c]} 
          restPrice = {this.priceList[c]} 
          restRating = {this.ratingList[c]} 
          closeRestProfile = {()=>this.closeRestProfile()} />
      </div>
    );
  }
}

export default App;

class SwipeComponent extends React.Component {

  swiping(e, deltaX, deltaY, absX, absY, velocity) {
    console.log("You're Swiping...", e, deltaX, deltaY, absX, absY, velocity)
  }

  swipingLeft(e, absX) {
    console.log("You're Swiping to the Left...", e, absX)
  }

  swiped(e, deltaX, deltaY, isFlick, velocity) {
    console.log("You Swiped...", e, deltaX, deltaY, isFlick, velocity)
  }

  swipedUp(e, deltaY, isFlick) {
    console.log("You Swiped Up...", e, deltaY, isFlick)
  }



  render() {
    return (
      <Swipeable
        onSwiping={this.swiping}
        onSwipingLeft={this.swipingLeft}
        onSwiped={this.swiped}
        onSwipedUp={this.swipedUp} >
          You can swipe here!
      </Swipeable>
    )
  }
}
