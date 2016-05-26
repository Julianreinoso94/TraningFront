$(function(){
	var form = $('form');
  	 form.find('input[type=submit]').first().on('click',onClick);

        

	 function onClick ()
	 {

        /*username = form.find('input.username'),
        password = form.find('input.password');*/
        $("personas").empty();

	 }
	

  $.get({
            url:'/persona',
            data:{
                
            },

           /*success: function(data)
            {




					for(var i =0 ; i< data.length;i++)
					{
					   

					    $('#personas').append('<td>'+ data[i].id +'</td>'
					    	                 +'<td>' +data[i].nombre +'</td>'
					    	                 +'<td>' +data[i].edad +'</td>'
					    	                 +'<td>' +data[i].email +'</td>' );
					}
			}*/

			 success: function(data) //td:columna tr:fila
            {
            	var content = "<table>";

					for(var i =0 ; i< data.length;i++)
					{
					     content +=       	 '<tr><td>'+ data[i].id +'</td>'
					    	                 +'<td>' +data[i].nombre +'</td>'
					    	                 +'<td>' +data[i].edad +'</td>'
					    	                 +'<td>' +data[i].email +'</td></tr>'

					}

			content += "</table>";
			$('#here_table').append(content);
			
		   }
		



        });



});