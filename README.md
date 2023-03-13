# pokedex-pokeapi
Projeto Estudo PokeAPI

### Tecnologias presente neste projeto
  - NodeJS
  - AdonisJS
  - Japa
  - Redis
  - Redis Commander
  - Docker
  - Docker-compose

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
 - `npm test` - Executa testes unitários atraves do JAPA;
 - Para acessar o Redis Commander utilize a porta **8081** [localhost:8081](http://localhost:8081).

 ### Curl para buscar o Pokemon (nome ou id) - via Postman
```curl --location --request GET 'http://localhost:3333/pokedex/vaporeon'```
 - Obs.: "vaporeon" é o nome do pokemom desejado. 
