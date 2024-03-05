angular.module('taskApp', [])
    .controller('TaskController', function() {
        var vm = this;
        vm.tasks = [
            { name: 'Task 1' },
            { name: 'Task 2' },
            { name: 'Task 3' }
        ];
        vm.newTask = '';
        vm.editingTask = false;
        vm.updatedTask = {};

        vm.addTask = function() {
            vm.tasks.push({ name: vm.newTask });
            vm.newTask = '';
        };

        vm.editTask = function(task) {
            vm.editingTask = true;
            vm.updatedTask = angular.copy(task);
        };

        vm.updateTask = function() {
            vm.tasks[vm.tasks.indexOf(vm.updatedTask)] = vm.updatedTask;
            vm.cancelEdit();
        };

        vm.cancelEdit = function() {
            vm.editingTask = false;
            vm.updatedTask = {};
        };

        vm.deleteTask = function(task) {
            vm.tasks.splice(vm.tasks.indexOf(task), 1);
        };
    });
