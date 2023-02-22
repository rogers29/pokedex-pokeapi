# pokedex-pokeapi
Projeto Estudo PokeAPI

### Tecnologias presente neste projeto
  - Node
  - AdonisJS
  - Japa

### Instalação

#### Para realizar a instalação da aplicação (sem o docker):
 - Instale as dependências pelo comando `npm install`;
 - Execute o comando `npm run dev`;
 - A aplicação rodará na porta **3333** [localhost:3333](http://localhost:3333).
 
#### Para realizar a instalação da aplicação (com o docker):
 - Efetue a instalação do docker e docker-compose (link abaixo);
 - Execute o comando `sudo docker-compose up -d`;
 - Verifique se a aplicação está rodando corretamente com o comando `sudo docker ps -a`;
 - Caso tudo ok só acessar o navegador pelo link: http://localhost:3333.

### Comandos úteis
 - `npm test` - Executa testes unitários atraves do JAPA

 ### Curl para buscar comentários - via Postman
```curl --location --request GET 'http://localhost:3333/pokedex/vaporeon'```
 - Obs.: Onde "vaporeon" é o nome do pokemons desejado. 
