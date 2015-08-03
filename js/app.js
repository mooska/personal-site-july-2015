var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'page-home.html',
            controller: 'homeController'
        })
        .when('/home', {
            templateUrl: 'page-home.html',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: 'page-about.html',
            controller: 'aboutController'
        })
        .when('/resume', {
            templateUrl: 'page-resume.html',
            controller: 'resumeController'
        })
        .when('/portfolio', {
            templateUrl: 'page-portfolio.html',
            controller: 'portfolioController'
        });
    //vv  THIS NEEDS TO BE UNCOMMENTED WHEN LIVE  vv
    //    $locationProvider.html5Mode(true);
}]);


// CONTROLLERS ============================================

animateApp.controller('homeController', function ($scope) {
    $scope.pageClass = 'page-home';
});

animateApp.controller('aboutController', function ($scope) {
    $scope.pageClass = 'page-about';
});

animateApp.controller('resumeController', function ($scope) {
    $scope.pageClass = 'page-resume';
});

animateApp.controller('portfolioController', function ($scope) {
    $scope.pageClass = 'page-portfolio';
});