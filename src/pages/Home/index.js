import React from 'react';
import { useHistory } from 'react-router-dom';

import { HomeContainer, FormSection, Form, Title, Description } from './styles';
import PrimaryButton from '../../components/PrimaryButton';

import Logo from '../../components/Logo';
import Cover from '../../components/Cover';

export default function Home() {
    const history = useHistory(); 

  function handleClick(e) {
    e.preventDefault();

    history.push('/Pasta');
  }
  
  return (
      <HomeContainer>
          <FormSection>
            <Logo width="250" />
            <Form>
              <Title>Realize o seu pedido</Title>
              <Description>Estamos prontos para atendê-lo e proporcionar a melhor experiência possível.</Description>
              <PrimaryButton title="Fazer meu pedido" onClick={(e) => handleClick(e)} />
            </Form>
          </FormSection>
          <Cover />
      </HomeContainer>
  );
}