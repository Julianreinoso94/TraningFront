
$(function(){

	$('#actualizar').on('click', actualizar);
	$('#agregar').on('click', agregar);
	$('#eliminar').on('click', eliminar);
	$('#modificar').on('click', modificar);
	$('#obtener').on('click', obtener);

	/*var form = $('form');
  	 form.find('btnAcualizar').first().on('click',onClick);

        

	 function onClick ()
	 {

        /*username = form.find('input.username'),
        password = form.find('input.password');
        $("personas").empty();
    }*/

	

	 function actualizar()
	 {
	 	$(".form").remove("#here_table");
	
  $.get({
            url:'/persona',
            data:{
            	 
                
            },
			 success: function(data) //td:columna tr:fila
            {
            	var content = "<table >";
            	content+='<tr><th>'+"ID"+'</th>'
            	        +'<th>'+"Nombre"+'</th>'
            	        +'<th>'+"Edad"+'</th>'
            	        +'<th>'+"Email"+'</td></tr>'

					for(var i =0 ; i< data.length;i++)
					{
					     content +=       	 '<tr><td>'+ data[i].id +'</td>'
					    	                 +'<td>' +data[i].nombre +'</td>'
					    	                 +'<td>' +data[i].edad +'</td>'
					    	                 +'<td>' +data[i].email +'</td></tr>'

					}

			content += "</table>";
			$('#here_table').append(content);
			$(".table").css("table table-condensed");
			
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
	 		$.ajax
				 ({
				 	url:'/persona/:id',
				 	method:'post',
				 	data:{
				 			id:$('#id').val(),
							    nombre:$('#nombre').val(),
							    edad:$('#edad').val(),
							    email:$('#email').val()

				 	},
				 	success:function(data)
				 	{
				 		console.log('respuesta del server',data);

			               alert('Persona modificada.');
				 	}

				 });
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