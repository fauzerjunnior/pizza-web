import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import FormContainer from '../../components/FormContainer';
import PrimaryButton from '../../components/PrimaryButton';
import OrderItems from '../../components/OrderItems';

import { Details } from './styles';

import api from '../../services/api';

export default function chooseFilling() {
  const [id, setId] = useState('');
  const [order, setOrder] = useState('');

  const history = useHistory();

  useEffect(() => {
    setId(history.location.idOrder);
    
    if (order === '') {
        api.get('orders', {
            params: {
                id: id
            }
        })
        .then(response => {
            setOrder(response.data[0]);
        })
    }
  });

  function handleRedirect(e) { 
      e.preventDefault();

      history.push('/');
  }

  let pasta, size, filling;
  if (order) {
      console.log(order.data);
    pasta = (
        <OrderItems title="Massa:" description={order.data.pasta} />
    );
    size = (
        <OrderItems title="Tamanho:" description={order.data.size} />
    );
    filling = (
        <OrderItems title="Recheio:" description={order.data.filling} />
    );
  }

  return (
      <FormContainer title="Pedido realizado com sucesso" description="Esperamos que goste e volte a pedir conosco novamente." cancel={false} >
        <Details>
            {pasta} 
            {size}
            {filling}
            <PrimaryButton title="Começar de novo" type="submit" onClick={e => handleRedirect(e)} />
        </Details>
    </FormContainer>
  );
}