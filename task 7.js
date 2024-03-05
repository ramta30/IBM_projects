var app = angular.module('productCatalog', []);

app.controller('ProductController', function ($scope) {
    $scope.products = [
        { name: 'Product 1', category: 'Electronics', price: 99.99, features: ['Wireless', 'Bluetooth'] },
        { name: 'Product 2', category: 'Clothing', price: 49.99, features: ['Cotton', 'Casual'] },
        { name: 'Product 3', category: 'Electronics', price: 149.99, features: ['Noise-cancelling', 'Hi-fi'] },
        { name: 'Product 4', category: 'Books', price: 19.99, features: ['Fiction', 'Bestseller'] }
    ];

    $scope.categories = ['All', 'Electronics', 'Clothing', 'Books'];
    $scope.features = ['All', 'Wireless', 'Bluetooth', 'Cotton', 'Casual', 'Noise-cancelling', 'Hi-fi', 'Fiction', 'Bestseller'];

    $scope.selectedCategory = '';
    $scope.selectedFeature = '';

    $scope.filterProducts = function () {
        $scope.filteredProducts = $scope.products.filter(function (product) {
            return ($scope.selectedCategory === 'All' || product.category === $scope.selectedCategory) &&
                ($scope.selectedFeature === 'All' || product.features.includes($scope.selectedFeature));
        });
    };

    $scope.filterProducts();

    $scope.$watchGroup(['selectedCategory', 'selectedFeature'], function () {
        $scope.filterProducts();
    });
});
