$(function(){
	var form = $('form'),
	 form.find('input[type=submit]'),
        form.on('click', onClick);//agrega el click al click del boton


	function onClick(){
		$.ajax({
			url:'/persona',
			method:'POST',
			data:{
				nombre:$('input[type=text]').val()
			},
			success: function(data){
				console.log(data);
			}
		});		
		return false;
	}
});