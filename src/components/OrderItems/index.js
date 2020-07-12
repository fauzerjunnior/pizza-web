import React, { Component } from 'react';

import { Container, Title, Description } from './styles';

export default class OrderItems extends Component {
  render() {
    return(
      <Container>
        <Title>{this.props.title}</Title>
        <Description>{this.props.description}</Description>
      </Container>
    );
  } 
}