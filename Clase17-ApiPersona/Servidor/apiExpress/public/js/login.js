$(function(){
    var form = $('form'),
        username = form.find('input.username'),
        password = form.find('input.password');
        
    form
        .find('input[type=submit]')
        .on('click', onClick);

        function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
        }


    function onClick(){        
        if(!username.val().length){
            username.parents('.form-group').addClass('required');
        }
        else
        {
           username.parents('.form-group').removeClass('required');

            if (validateEmail(username.val()))
        {
            username.parents('.form-group').removeClass('invalid');
        }
        else{
            username.parents('.form-group').addClass('invalid');
            }
        }
        //mail invalido de 0 a 3 letras
        /*if(username.val().length && username.val().length < 3){
            username.parents('.form-group').addClass('invalid');
        }
        else{
            username.parents('.form-group').removeClass('invalid');
        }*/
        
        if(username.parents('.form-group.required, .form-group.invalid').length){
            username.parents('.form-group').addClass('has-error');
        }
        else{
            username.parents('.form-group').removeClass('has-error');            
        }
        
        if(!password.val().length){
            password.parents('.form-group').addClass('has-error');
        }
        else{
            password.parents('.form-group').removeClass('has-error');            
        }

        if(form.find('.has-error').length){            
            return false;
        }
        
        $.post({
            url:'/login',
            data:{
                username:username.val(),
                password:password.val()
            },
            success: function(data){
                if(data.ok){
                    console.log('todo ok');
                }
                else{
                    console.error('password invalido');
                }
            }
        });     
        return false;
    }
});