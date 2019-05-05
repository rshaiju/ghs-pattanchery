///<reference path="../node_modules/angular/angular.js">
///<reference path="../node_modules/@uirouter/angularjs/release/angular-ui-router.js">
var app=angular.module('mySchoolApp');

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'app/feed/homePage/homePage.html'
        }).state('about', {
            url: '/about',
            templateUrl: 'app/feed/about/about.html'
        }).state('academics', {
            url: '/academics',
            templateUrl: 'app/feed/academics/academics.html'
        }).state('gamesAndSports', {
            url: '/gamesAndSports',
            templateUrl: 'app/feed/gamesAndSports/gamesAndSports.html'
        }).state('lifeInTheSchool', {
            url: '/lifeInTheSchool',
            templateUrl: 'app/feed/lifeInTheSchool/lifeInTheSchool.html'
        }).state('schoolFamily', {
            url: '/schoolFamily',
            templateUrl: 'app/feed/schoolFamily/schoolFamily.html'
        }).state('contact', {
            url: '/contact',
            templateUrl: 'app/feed/contact/contact.html'
        })
});