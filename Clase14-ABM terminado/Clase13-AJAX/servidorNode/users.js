


module.exports = function(server){
 var UsersModel = function(){
 
  //crea en json la variable usuarios con un vector de dos elementos/////////////////////////////////////////////////////////////////////
  var usuarios = [
  {
   name: 'pablo',
   email: '@globallogic.com'
  },
  {
   name: 'agustin',
   email: 'agustin.diaz@gl.com' 
  }
  ];


  ///////////////////////////////////Agregrar usuario///////////////////////////
  this.AddUser = function(req,res,next)
   {
       var user = { };

       user.name = req.params.name;
       user.email = req.params.email;
      
      usuarios.push(user);//agrega al usuario
      res.send(200,user);//envia el codigo 200 y muestra el usuario
      return next();
    }

////////////////////////////////////obtenerUsuario/////////////////////////////////////////

  this.getUser = function(req, res, next){
   var userId = req.params.id; // va .params.id porque es un get, si es POST va .body.id

   if(usuarios[userId]){ //si encontro un usuario me devuelve los datos de ese usuario
    res.send(200, usuarios[userId]);
   }
   return next(); //siempre se hace esto
  }


///////////////////////////EDITAR USUARIO///////////////////////////////////

  this.editUser = function(req, res, next){
  
   var userId = req.params.id,//creo una variable y le asigno el id que ingresa
   newName = req.params.name;//recibo un nombre y lo asigno a la variable name

   if(usuarios[userId]){//si el usuario tiene esa id
    usuarios[userId].name = newName;//agrega el nombre 
    res.send(200, usuarios[userId]);//muestra al usuario modificado
   }
   return next();
  }//fin editusuario

   
   this.ListUser = function (req ,res ,next)
   {
       res.send(200,usuarios);
       return next();

   }//fin list user



  this.deletUser =function (req,res,next)
 {
   var userId = req.params.id;//recibe la id 
   //la pasa por userID

   if(usuarios[userId]){// si el usuario existe lo elimina
    delete usuarios[userId];// al usar delete, deja el espacio 
    res.send (200, 'Usuario eliminado.');//pasa el codigo 200 y muestra que fue eliminado
   
   // usuarios = usuarios.filter( function(a) { return !!a; });  
  //fumcion filter evalua cada uno de los elementos retorna true cuando encuentra algo
  //usuario1 true
  //usuario2 true
  //null false

   }                    // en undefined. Con el filter, filtro con "!!"
   else{                  // que hace true el "undefined" y el "null"
    res.send(404, 'El usuario no existe, no se puede eliminar.');//no existe el usuario
   }
   return next();
  }

  };



 var User = new UsersModel();

///////////////////GET/////////////////////////////////////
 server.get({
  path: '/user/:id',
  version: '1.0.0'
 }, User.getUser);//mostrr 1 usuario

 ///////////////////////POST/////////////////////////

 server.post({
  path: '/user/:id',
  version: '1.0.0'
 }, User.editUser);//busco por id y edito*/

 
 server.put({
  path: '/user',
  version: '1.0.0'
 }, User.AddUser);//agrego un usuario

  server.get({
  path: '/user',
  version: '1.0.0'
 }, User.ListUser);//mostrar todos los usuarios

 server.del({
  path: '/user/:id',
  version: '1.0.0'
 }, User.deletUser);








};
