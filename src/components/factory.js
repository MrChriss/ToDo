angular.module('ToDo').factory('ToDoFactory', function(){
  
  var tasksDone = [];
  var tasks = [];
  
  return {
    tasksArr: tasks,
    tasksDoneArr: tasksDone,
      
    add: function(input) {
       if (input.length > 0) {
          tasks.push(input);
       }
    },
    deleteTask: function(currentTask, currentArr) {
        var index = currentArr.indexOf(currentTask);
        currentArr.splice(index, 1);
    },
    moveTask: function(currentTaskDone, currentArr) {
      currentArr.push(currentTaskDone);
    }
  };                          
});