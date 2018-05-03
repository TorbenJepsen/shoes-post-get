var app = angular.module('ShoeApp', ['ngRoute']);
console.log('client.js is loaded');

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: `views/home.html`
    })
    $routeProvider.when('/shoes', {
        templateUrl: `views/shoes.html`,
        controller: "ShoeController as vm"
    })
    $routeProvider.when('/socks', {
        templateUrl: `views/socks.html`,
        controller: "SocksController as vm"
    })
    .otherwise({
        template: '<h1>404</h1>'
    })
});