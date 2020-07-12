# Pizza Web

O Pizza Web é uma aplicação em React.js que tem o objetivo de gerenciar o processo da realização de um pedido de pizza. 

# Novidades

  - Styled Components (+)
  - Estrutura de Componentes
  - Validações do Formulário
  - Resumo de Pedido

### Backend

O backend é um json-server, por se tratar de um projeto com foco no frontend. Para dar o start do serviço, basta rodar o comando a seguir na raíz do projeto: 

```sh
$ cd pizza-web
$ json-server --watch database/db.json -p 3001
```

Feito isso o serviço com as informações mockadas de backend estará funcionando na porta em que o serviço do frontend vai consultar. 

### Frontend

Para instalar e subir o serviço do frontend, basta rodar o comando a seguir também na raíz do projeto:

```sh
$ cd pizza-web
$ yarn install && yarn start
```

Feito isso o serviço do frontend estará já em execução.
