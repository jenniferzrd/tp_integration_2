/*jshint esversion: 6*/
const express = require("express");
const app = express();
var bodyParser = require('body-parser');
import { createLi, updateTestimonyStatus, deleteTestimony, getTestimonies, postTestimony } from "./src/database/mysql";

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// on autorise le CROS = cross origin ressource sharing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers','Content-Type');
  next();
});

app.get('/',function(req,res){
  res.send('Hello World from index.js!');
});

app.post('/post/testimony', (req,res) => {
  // console.log(req.body);
  // res.send('@post testimony!');
  try {
    postTestimony((dbRes) => {
      res.send({error: false, data: dbRes});
    },
    req.body.name_client,
    req.body.name_project,
    req.body.message,
    req.body.published
  );
} catch (err) {
  res.send({error: true, data: err});
}
});

app.get('/get/testimonies', (req, res) => {
  try {
    getTestimonies((dbRes) => {
      res.send({error: false, data: dbRes});
    }
  );
} catch (err) {
  res.send({error: true, data: err});
}
});

app.get('/get/testimonies/published', (req, res) => {
  try {
    createLi((dbRes) => {
      res.send({error: false, data: dbRes});
    });
} catch (err) {
  res.send({error: true, data: err});
}
});

app.delete('/delete/testimony/:id', (req, res) => {
  try {
    deleteTestimony((dbRes) => {
      res.send({error: false, data: dbRes});
    },
    req.params.id
  );
} catch (err) {
  res.send({error: true, data: err});
}
});


app.put('/put/testimony/:id', (req, res) => {
  try {
    updateTestimonyStatus((dbRes) => {
      res.send({error: false, data: dbRes});
    },
    req.params.id
  );
} catch (err) {
  res.send({error: true, data: err});
}
});

app.listen(3333, function() {
  console.log('Node server listening on port 3333, check http://localhost:3333');
});
