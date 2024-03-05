// app.js
angular.module('weatherApp', [])
    .controller('WeatherController', function($scope, $http) {
        // Your API key and API URL (Replace with your own)
        var apiKey = 'YOUR_API_KEY';
        var apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

        // Function to fetch weather data
        $scope.getWeather = function(city) {
            var config = {
                params: {
                    q: city,
                    appid: apiKey,
                    units: 'metric' // For Celsius, use 'metric'; for Fahrenheit, use 'imperial'
                }
            };

            $http.get(apiUrl, config)
                .then(function(response) {
                    $scope.weatherData = response.data;
                }, function(error) {
                    console.log('Error fetching weather data:', error);
                });
        };
    });
