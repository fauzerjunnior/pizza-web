import React, { Component } from 'react';

import { FiArrowRight, FiArrowLeft} from 'react-icons/fi';
import Logo from '../Logo';

import { Section, BackLink, Title, Description } from './styles';

class DetailsForm extends Component {
  render() {
    let retry;
    if (this.props.cancel !== false) {
      retry = (<BackLink to="/">
          <FiArrowLeft size={16} color="#e02041"/> 
          Cancelar pedido
      </BackLink>);
    } 

    return(
      <Section>
          <Logo width="200" />
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description> 
          { retry }
      </Section>
    );
  }
}

export default DetailsForm;