// app.js
angular.module('eventCalendarApp', [])
    .controller('EventCalendarController', function($scope) {
        $scope.events = [
            { date: '2024-03-05', title: 'Event 1' },
            { date: '2024-03-10', title: 'Event 2' },
            { date: '2024-03-15', title: 'Event 3' }
            // Add more events as needed
        ];

        // Function to add new event
        $scope.addEvent = function(date, title) {
            $scope.events.push({ date: date, title: title });
        };
    });
