var app = angular.module('authApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html',
            controller: 'LoginController'
        })
        .when('/signup', {
            templateUrl: 'signup.html',
            controller: 'SignupController'
        })
        .when('/dashboard', {
            templateUrl: 'dashboard.html',
            controller: 'DashboardController',
            resolve: {
                auth: function ($location, AuthService) {
                    if (!AuthService.isAuthenticated()) {
                        $location.path('/');
                    }
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('LoginController', function ($scope, $location, AuthService) {
    $scope.login = function () {
        AuthService.login($scope.username, $scope.password, function (success) {
            if (success) {
                $location.path('/dashboard');
            } else {
                $scope.error = 'Invalid username or password';
            }
        });
    };
});

app.controller('SignupController', function ($scope, $location, AuthService) {
    $scope.signup = function () {
        AuthService.signup($scope.username, $scope.password);
        $location.path('/');
    };
});

app.controller('DashboardController', function ($scope, AuthService) {
    $scope.username = AuthService.getUsername();
});

app.service('AuthService', function () {
    var isAuthenticated = false;
    var username = '';

    this.login = function (user, pass, callback) {
        // Implement login logic here (e.g., call backend API)
        // On success, set isAuthenticated to true and store username
        isAuthenticated = true;
        username = user;
        callback(true);
    };

    this.signup = function (user, pass) {
        // Implement signup logic here (e.g., call backend API)
    };

    this.isAuthenticated = function () {
        return isAuthenticated;
    };

    this.getUsername = function () {
        return username;
    };
});
