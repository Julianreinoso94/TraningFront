var agregar = (function(){
	var form = $('.container');
	form.find('#logIn').off('click').on('click',logIn);
	

	function logIn(e){
		e.preventdefault;
		var userCre = '<button class="form-control" id="createUsers" type="button" class="btn">Create User</button>',
			userLis	= '<button class="form-control" id="listUsers" type="button" class="btn">List Users</button>';
		form.find('#user').remove();
		form.find('#pass').remove();
		form.find('#logIn').remove();
		form.find('#crea').append(userCre);
		form.find('#list').append(userLis);
		form.find('#createUsers').off('click').on('click',createUser);
	}
	function createUser(e){
		console.log("hola");
		e.preventdefault;
        var CapTemp = form.find('#templateCreate').html();
		templateForm.load('form.html',function(){
		
		

		// templateForm.load('template/form.html',function(){
			

			var $templateComplete = templateForm.html();
			form.find('#templatehtml').append(CapTemp);
		});
	}	
})();