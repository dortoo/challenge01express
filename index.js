const express = require('express');

const server = express();

server.use(express.json());

//Query Params = ?teste=1
//Route Params = /users/1
//Request body = { "name":"Diego", "email":"diego@rocketseat.com.br" }

const projects = [];

let countingReq = 0;


server.use((req, res, next) => {
  console.log(`Metodo: ${req.method}; URL: ${req.url}`);

  next();

});



function checkProjectExists(req, res, next) {
  if (!projects[req.params.index]) {
    return res.status(400).json({error: 'Project does not exist'});
  }

  return next();
}



function countReq(req, res, next) {
  countingReq++;

  console.log(`${countingReq} requisition(s) made`);

  return next();
}



server.get('/projects', countReq, (req, res) => {
  return res.json(projects); //list all projects
});



server.get('/projects/:index', countReq, checkProjectExists, (req, res) => {
  const { index } = req.params;

  return res.json(projects[index]); //list a specific project
});



server.put('/projects/:index', countReq, (req, res) => {
  const { index } = req.params;
  const { title } = req.body;

  projects[index]["title"] = title;

  return res.json(projects[index]);

});



server.delete('/projects/:index', countReq, (req, res) => {
  const { index } = req.params;

  projects.splice(index, 1); //delete a specific project

  return res.json(projects);
});



server.post('/projects', countReq, (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  projects.push({"id":id, "title":title, tasks:[]}); //register new project

  return res.json(projects);

});



server.post('/projects/:index/tasks', countReq, (req, res) => {
  const { index } = req.params;
  const { tasks } = req.body;

  projects[index]["tasks"].push(tasks);

  return res.json(projects);

});



server.listen(3000);