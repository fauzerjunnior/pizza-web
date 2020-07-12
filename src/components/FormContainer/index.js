import React, { Component } from 'react';
import DetailsForm from '../DetailsForm';

import { NewOrderContainer, Content } from './styles';

class FormContainer extends Component {
  render() {
    return (
      <NewOrderContainer> 
          <Content>
              <DetailsForm title={this.props.title} description={this.props.description} cancel={this.props.cancel} />
              { this.props.children }
          </Content>
      </NewOrderContainer> 
    );
  }
}

export default FormContainer;