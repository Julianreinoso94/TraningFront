var express = require ('express');//devuelve el server
server=express();//asigno lo que creo en la linea

server.use(express.static ('public'));//El use sieve para archivos estaticos , si hay un error reseponde eso

server.get('/', function (req, res,next) {
  res.send('GET request to the homepage');
});

server.listen(3000,function()
 {
console.log("Servidor Express escuchando en 3000");
});