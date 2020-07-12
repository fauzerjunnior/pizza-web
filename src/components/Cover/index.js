import React, { Component } from 'react';

import cover from '../../assets/images/pizza-online.png';

class Cover extends Component {
  render() {
    return(
      <img src={cover} width="700" alt="Pizza Web" />
    ); 
  }
}

export default Cover;