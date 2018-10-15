import React, { Component } from 'react';

class Headbar extends Component {
  render() {
    return (
      <div>
        <div className='headbarContainer'>
          <img className='headbarLogo' src='/img/logo.png' alt='logo'/>
          <img className='headbarMenu' src='/img/menu.png' alt='menu'/>
        </div>
      </div>
    );
  }
}

export default Headbar;
