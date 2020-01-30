# Desafio 1: Conceitos do NodeJS
Aplicação criada para armazenar projetos e tarefas do zero utilizando Express e NodeJS.


Requerimentos do projeto:

--> Rotas
POST /projects: A rota recebe id e title dentro do corpo e cadastra um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }.

GET /projects: Rota que lista todos projetos e suas tarefas;

PUT /projects/:id: A rota altera apenas o título do projeto com o id presente nos parâmetros da rota;

DELETE /projects/:id: A rota deleta o projeto com o id presente nos parâmetros da rota;

POST /projects/:id/tasks: A rota recebe um campo title e armazena uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

--> Middlewares

- Middleware que é utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL e verifica se o projeto com aquele ID existe.

- Middleware global chamado em todas requisições que imprime em (console.log) uma contagem de quantas requisições foram feitas na aplicação até então.
