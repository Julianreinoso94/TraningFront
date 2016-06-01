var obj=(function(){

 
   var $form = $('form'),
        taskInput = $form.find('input[type=text]'),
        taskDate = $form.find('input[type=date]'),
        showTasksButton = $form.find('.showTasks'),
        tasks = [],
        templateContainer = $('#templates'),
        taskTemplate;

         function init()
  {
    
    //busca en #templates  
    templateContainer.find('#todoTemplate').load('/todo/task-template.html', function(){
        taskTemplate = templateContainer.find('#todoTemplate').val();
    });

   $form.on('submit', onSubmit);
   showTasksButton.on('click', showTasks);
      }


   function onSubmit(){
    console.log();
       
       if(taskInput.val().length && taskDate.val().length){
          tasks.push({
             name:  taskInput.val(),
             date: taskDate.val()
          });
       }
       return false;
   }
   
   function showTasks(){
       var tasks = [],
       tasksHtml = '';//crea variable string taskHtml
       for(var i=0; i< tasks.length; i++){//recorre el vector

           tasksHtml += getTaskHtml(tasks[i]);//concateno todo lo de la funcion
            console.log (tasksHtml);

       }
       
       $form.find('ul').append(tasksHtml);

   }
  
   function getTaskHtml(task){
      return taskTemplate
        .replace(/%name%/g, task.name)
        .replace(/%date%/g, task.date);
  }
   return{

    onSubmit:onSubmit,
    showTasks:showTasks,
    getTaskHtml:getTaskHtml,
    init:init
  }
   

})();

$(function()
{
obj.init();
});
