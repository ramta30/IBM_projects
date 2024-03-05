var app = angular.module('quizApp', []);

app.controller('QuizController', function ($scope) {
    $scope.quiz = {
        title: 'AngularJS Quiz',
        questions: [
            {
                question: 'What is AngularJS?',
                options: ['A JavaScript framework', 'A programming language', 'A database system'],
                correctAnswer: 'A JavaScript framework'
            },
            {
                question: 'What directive is used to bind data to HTML elements?',
                options: ['ng-model', 'ng-bind', 'ng-repeat'],
                correctAnswer: 'ng-model'
            },
            {
                question: 'Which service is used for making HTTP requests in AngularJS?',
                options: ['$http', '$ajax', '$request'],
                correctAnswer: '$http'
            }
        ]
    };

    $scope.currentQuestionIndex = 0;
    $scope.currentQuestion = $scope.quiz.questions[$scope.currentQuestionIndex];
    $scope.selectedOption = '';
    $scope.score = 0;
    $scope.quizFinished = false;

    $scope.nextQuestion = function () {
        if ($scope.selectedOption === $scope.currentQuestion.correctAnswer) {
            $scope.score++;
        }
        $scope.currentQuestionIndex++;
        if ($scope.currentQuestionIndex < $scope.quiz.questions.length) {
            $scope.currentQuestion = $scope.quiz.questions[$scope.currentQuestionIndex];
            $scope.selectedOption = '';
        } else {
            $scope.quizFinished = true;
        }
    };

    $scope.resetQuiz = function () {
        $scope.currentQuestionIndex = 0;
        $scope.currentQuestion = $scope.quiz.questions[$scope.currentQuestionIndex];
        $scope.selectedOption = '';
        $scope.score = 0;
        $scope.quizFinished = false;
    };
});
