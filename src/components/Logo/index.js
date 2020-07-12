import React, { Component } from 'react';

import logo from '../../assets/images/logo.png';

class Logo extends Component {
  render() {
    return(
      <img src={logo} width={this.props.width} alt="Pizza Web" />
    ); 
  }
}

export default Logo;