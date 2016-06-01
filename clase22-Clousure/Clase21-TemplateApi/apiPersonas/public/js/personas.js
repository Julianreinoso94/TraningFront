
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
    
    var tokensTabla ='<tr><th>'+"ID"+'</th>'
            	        +'<th>'+"Nombre"+'</th>'
            	        +'<th>'+"Edad"+'</th>'
            	        +'<th>'+"Email"+'</td></tr>';

    var personTemplate='<tr><td> %id%</td>'+
					    	                 '<td> %nombre%</td>'
					    	                 +'<td>%edad%</td>'
					    	                 +'<td>%email%</td></tr>' 

    function getPersonHtml(person)
    {
    	return personTemplate.replace(/%id%/,person.id )
    	                     .replace(/%nombre%/,person.nombre )
    	                     .replace(/%edad%/,person.edad )
    	                     .replace(/%email%/,person.email);
    }
	

	 function actualizar()
	 {
	 

  $.get({
            url:'/persona',
            data:{
            	 
                
            },
			 success: function(data) //td:columna tr:fila
            {
            	/*	$(".here_table").remove();
            		var div= $('<div></div>');
            		div.addClass('.here_table');*/

            	var content = "<table >";
            	content+=tokensTabla

					for(var i =0 ; i< data.length;i++)
					{
					     content +=  getPersonHtml(data[i])     	

					}

			content += "</table>";
			$('.here_table').append(content);
			/*('.form').append(div);*/
	
			
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
	  }//fin funcion



	  /*ejemplo tokkens
        function showTasks(){
       var tasksHtml = '';
       for(var i=0; i< tasks.length; i++){
           tasksHtml += getTaskHtml(tasks[i]);
       }
       
       $form.find('ul').append(tasksHtml);
   }
   
  function getTaskHtml(task){
      return taskTemplate
        .replace(/%name%/gi, task.name)///%name%/gi es una expresion regular
        .replace(/%date%/g, task.date);
  }


	  */
    




});