$(function(){

  $.get({
            url:'/persona',
            data:{
                
            },

            success: function(data)
            {
					for(var i =0 ; i< data.length;i++)
					{
						console.log('hola');

					    $('#personas').append('<div class="row"> <span class="col-xs-3"> <li>'+ data[i].id +'</li>'
					    	                 +'<li>' +data[i].nombre +'</li>'
					    	                 +'<li>' +data[i].edad +'</li>'
					    	                 +'<li>' +data[i].email +'</li> </div>' );
					}
				}
        });     
        
    



});