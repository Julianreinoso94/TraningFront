var express = require('express'),
  server = express(),
  bodyParser = require('body-parser'),
  personas = [
    {
        id: 1,
        nombre: 'Persona1',
        edad: 24,
        email: 'persona1@sarasa.com'  
    },
    {
        id: 2,
        nombre: 'Persona2',
        edad: 25,
        email: 'persona2@sarasa.com'  
    },
    {
        id: 3,
        nombre: 'Persona3',
        edad: 25,
        email: 'persona3@sarasa.com'  
    },
    {
        id: 4,
        nombre: 'Persona4',
        edad: 26,
        email: 'persona4@sarasa.com'  
    },
    {
        id: 5,
        nombre: 'Persona5',
        edad: 28,
        email: 'persona1@sarasa.com'  
    }
  ];

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); 

// liste todas las personas
server.get('/persona', function(req, res, next){
    res.send(personas);//en un html mostrar esto
});

// detalle de una persona
server.get('/persona/:id', function(req, res, next){
    res.send();
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});