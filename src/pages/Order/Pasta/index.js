import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import swal from 'sweetalert';

import FormContainer from '../../../components/FormContainer';
import PrimaryButton from '../../../components/PrimaryButton';
import { Select } from './styles';

import api from '../../../services/api';

export default function Pasta() {
  const [pasta, setPasta] = useState('');
  const [listPasta, setListPasta] = useState('');

  const history = useHistory();

  function handleChange(e) {
    e.preventDefault();

    const value = e.target.value;
    setPasta(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (pasta !== '' && pasta !== 'Escolha uma massa') {
      history.push({
        pathname: 'Size',
        pasta: pasta
      });
    } else {
      swal({
        title: 'Ops',
        text: 'A escolha de uma massa é obrigatória',
        icon: 'error'
      });
    }
  }
 
  useEffect(() => {
    if (listPasta === '') {
      api.get('pasta')
      .then(response => {
        setListPasta(response.data);
      });
    }
  });

  return (
    <FormContainer title="Novo pedido" description="Agora precisamos que você nos diga quais os detalhes do pedido.">
      <form>
        <Select onChange={e => handleChange(e)}>
          <option>Escolha uma massa</option>
          {listPasta && listPasta.map(value => (
          <option value={value.description} key={value.id}>{value.description}</option>
        ))}
        </Select>
        <PrimaryButton title="Ir para o tamanho" onClick={e => handleSubmit(e)} />
      </form>
    </FormContainer>
  );
}