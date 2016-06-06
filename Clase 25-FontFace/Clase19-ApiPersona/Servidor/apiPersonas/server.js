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
server.get('/persona', function(req, res, next){//mostrar lista de usuario
    res.send(personas);//en un html mostrar esto
});


  
  server.put('/persona', function (req,res,next) {//agrega a un usuario
               var user = { };
               user.id=req.body.id;
               user.nombre = req.body.nombre;
              user.edad= req.body.edad;
               user.email = req.body.email;

              

            personas.push(user);
   

        res.send (user);
        return next();
});  

  server.get('/persona/:id',function(req,res,next)//Mostrar un usuario
  {  
      var ide= req.params.id,
       i=0;


     while(  i < personas.length  &&  !(personas[i].id == ide)) 
     {
           i++;

     }
          
          if(i < personas.length )
           res.send(personas[i]);
          else
           res.send('no existe');

  });

  server.post('/persona/:id',function(req,res,next)//Edita un usuario
  {
    var id= req.body.id;
    var nombre= req.body.nombre;
    var email = req.body.email;
    var edad =req.body.edad;
    var i=0;
    
    while (i<personas.length && !(personas[i].id ==id))// mientras no se termine el vector y la id sea distinta
    {
        i++
    }

      if( i<personas.length)//si i se encuentra en el vector
      {
        personas[i].id = id,
        personas[i].nombre =nombre,
        personas[i].email=email,
        personas[i].edad=edad,
        res.send('se ha agregado a la persona'+personas[i])
      }
        else
     {
        res.send('la persona no existe')
     }

  });

         server.delete('/persona', function(req, res, next){//eliminar
         
         var ide = req.body.id,
          tam = personas.length,
          i = 0;

          while( i < tam && !(personas[i].id == ide) )
           i++;

          console.log(i);

          if(i < tam){
           var eliminado = personas.splice(i, 1);
           res.send(eliminado);
          }
          else
             {
           res.send('no se puede eliminar');
            }
            return next();
        });





 
 

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});