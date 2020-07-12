import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import swal from 'sweetalert';

import FormContainer from '../../../components/FormContainer';
import PrimaryButton from '../../../components/PrimaryButton';
import OrderItems from '../../../components/OrderItems';
import { Select } from './styles';

import api from '../../../services/api';

export default function Size() {
  const [pasta, setPasta] = useState('');
  const [size, setSize] = useState('');
  const [listSize, setListSize] = useState('');

  const history = useHistory();

  function handleChange(e) {
    e.preventDefault();

    const value = e.target.value;
    setSize(value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    setSize(e.target.value);

    if (size !== '' && size !== 'Escolha um tamanho') {
      history.push({
        pathname: 'Filling',
        pasta: pasta,
        size: size
      });
    } else {
      swal({
        title: 'Ops',
        text: 'A escolha de um tamanho é obrigatória',
        icon: 'error'
      });
    }
  }

  useEffect(() => {
    setPasta(history.location.pasta);

    if (listSize === '') {
      api.get('size')
      .then(response => {
        setListSize(response.data);
      });
    }
  });

  return (
    <FormContainer title="Novo pedido" description="Agora precisamos que você nos diga quais os detalhes do pedido.">
      <form>
        <OrderItems title="Massa:" description={pasta} />

        <Select onChange={e => handleChange(e)}>
          <option>Escolha uma tamanho</option>
          {listSize && listSize.map(value => (
          <option value={value.description} key={value.id}>{value.description}</option>
        ))}
        </Select>
        <PrimaryButton title="Ir para o recheio" onClick={e => handleSubmit(e)} />
      </form>
    </FormContainer>
  );
}