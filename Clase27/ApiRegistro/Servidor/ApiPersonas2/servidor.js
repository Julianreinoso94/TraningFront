var express = require('express'),
  server = express(),
  bodyParser = require('body-parser'),

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); 

// liste todas las personas
server.get('/persona', function(req, res, next){//mostrar lista de usuario
    res.send(personas);//en un html mostrar esto
});

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); 

// liste todas las personas
server.get('/persona', function(req, res, next){//mostrar lista de usuario
    res.send(personas);//en un html mostrar esto
});