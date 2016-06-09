
$(function(){

	$('#actualizar').on('click', actualizar);
	$('#agregar').on('click', agregar);
	$('#eliminar').on('click', eliminar);
	$('#modificar').on('click', modificar);
	$('#obtener').on('click', obtener);
 

 $('.here_table').on('click','#modificar', function modificar(e){
  e.preventDefault();
  console.log($(this).attr("data-id"));


 })

	 function actualizar()
	 {
	 

  $.get({
            url:'http://connectedin.herokuapp.com/person',
            data:{
            	 
                
            },
			 success: function(data) //td:columna tr:fila
            {
            		$(".here_table").html("");
            		var div= $('<div></div>');
            		div.addClass('.here_table');

            	var content = "<table  >";
            	content+='<tr><th>'+"ID"+'</th>'
            	        +'<th>'+"firstName"+'</th>'
            	        +'<th>'+"Lastname"+'</th>'
            	        +'<th>'+"gender"+'</th>'
            	        +'<th>'+"birthday"+'</th>'
            	        +'<th>'+"Photo"+'</th>'
            	        +'<th>'+"email"+'</td></tr>'

					for(var i =0 ; i< data.length;i++)
					{
					     content +=       	 '<tr><td>'+ data[i]._id +'</td>'
					    	                 +'<td >' +data[i].firstName +'</td>'
					    	                 +'<td>' +data[i].lastName +'</td>'
					    	                  +'<td>' +data[i].gender +'</td>'
					    	                   +'<td>' +data[i].birthday +'</td>'
					    	                    +'<td>' +data[i].photo +'</td>'
					    	                     +'<td>' +data[i].email +'</td>'
					    	                 +'<td>' +'<button type="submit" data-id="'+data[i]._id+'" id="modificar" class="">Editar</button>'+'</td></tr>'

					}

			content += "</table>";
			$('.here_table').append(content);
			
	
			
		   }

		
        });

  }//fin de actualizar
   
  
   
    function agregar()
	 {

   //agregar una persona ajax
   $.ajax({
		   	 url: '/persona',
			 method: 'put',
			 data: {
			 	id:$('#id').val(),
			    nombre:$('#nombre').val(),
			    edad:$('#edad').val(),
			    email:$('#email').val()
			},
			  /*data: {id:$('#id').val()},*/
			 
			  success: function(data) 
			  {
			  	console.log('respuesta del server',data);

			    alert('Persona Agregada.');
  			 }

		   });
}
 
 //eliminar persona
     function eliminar()
	 {
				 $.ajax
				 ({
				 	url:'/persona',
				 	method:'delete',
				 	data:{
				 		id:$('#id').val(),

				 	},
				 	success:function(data)
				 	{
				 		console.log('respuesta del server',data);

			               alert('Persona Eliminada.');
				 	}

				 });

		}
	
	function modificar()
	 	{
	 	   
		  e.preventDefault();
		  console.log('hola');
  console.log($(this).attr("data-id"));
 }
	  

	  function obtener ()
	  {
	  	 $.ajax
	  	 ({
	  	 	url:'/persona/:id',
	  	 	method:'get',
	  	 	 	data:{
				 			id:$('#id').val(),

				 	},
				 	success:function(data)
				 	{
				 		console.log('respuesta del server',data);

			               alert('Persona Encontrada.');
				 	}


	  	 });
	  }
    




});