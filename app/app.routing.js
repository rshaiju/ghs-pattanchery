///<reference path="../node_modules/angular/angular.js">
///<reference path="../node_modules/@uirouter/angularjs/release/angular-ui-router.js">
var app=angular.module('mySchoolApp');

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'app/feed/homePage/homePage.html'
        })
});