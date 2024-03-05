var app = angular.module('todoApp', ['ngAnimate']);

app.controller('TodoController', function ($scope) {
    $scope.tasks = [];

    $scope.addTask = function () {
        if ($scope.newTask.trim() !== '') {
            $scope.tasks.push($scope.newTask);
            $scope.newTask = '';
        }
    };

    $scope.removeTask = function (index) {
        $scope.tasks.splice(index, 1);
    };
});
