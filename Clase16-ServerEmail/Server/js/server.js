var express = require('express'),
	server = express();
	bodyParser = require('body-parser');

//todos los archivos static los saca de la carpeta public
server.use(express.static('public'));
// convierte bodyPaerser en objeto json
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));



server.post('/persona', function(req, res, next){

	console.log('body', req.body);
	console.log('query string', req.query);
	console.log(req.query);
	
	var persona = {
		'name': req.body.nombre + 'b'
	};

	res.send(persona); //quiero que termine esta llamada y envie a persona
});


server.listen(3000, function(){
	console.log('escuchando en 3000...')
});

/*server.get('/', function(req, res, next){
	res.send('hello word');
});*/