


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
  /* this.AddUser = function(req,res,next)
   {
       var user = {};
       user.name = req.params.name;
       user.email = req.params.email;
       
      usuarios.push(user);
    }*/

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
  
   var userId = req.params.id,
   newName = req.params.name;

   if(usuarios[userId]){
    usuarios[userId].name = newName;
    res.send(200, usuarios[userId]);
   }
   return next();
  }
 };

 var User = new UsersModel();

///////////////////GET/////////////////////////////////////
 server.get({
  path: '/user/:id',
  version: '1.0.0'
 }, User.getUser);

 ///////////////////////POST/////////////////////////

 server.post({
  path: '/user/:id',
  version: '1.0.0'
 }, User.editUser);
};