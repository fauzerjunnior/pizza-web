import React, { Component } from 'react';
import { FiArrowRight, FiArrowLeft} from 'react-icons/fi';

import { Button, Icon } from './styles';

export default class PrimaryButton extends Component {
  render() {
    return(
      <Button onClick={this.props.onClick}>
        { this.props.title } 
        <FiArrowRight size={16} color="#fff"/> 
      </Button>
    );
  }
}