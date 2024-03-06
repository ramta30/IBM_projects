// app.js
angular.module('chatApp', [])
    .controller('ChatController', function($scope) {
        // Initialize an empty array for chat messages
        $scope.messages = [];

        // Function to send a new message
        $scope.sendMessage = function(event) {
            if (event.keyCode === 13 && $scope.newMessage.trim() !== '') {
                // Push new message to the array
                $scope.messages.push({
                    user: 'Me',
                    text: $scope.newMessage
                });
                // Clear the input field
                $scope.newMessage = '';
            }
        };
    });
