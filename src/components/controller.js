angular.module('ToDo').controller('mainController', function($scope, ToDoFactory, $rootScope) {
  
  $scope.factory = ToDoFactory;
  
  $scope.toDoTasksDone = ToDoFactory.tasksDoneArr;
  $scope.toDoTasks = ToDoFactory.tasksArr;
  $scope.addTask = ToDoFactory.add;
  $scope.remove = ToDoFactory.deleteTask;
  $scope.addTaskDone = ToDoFactory.moveTask;
    
}); 
