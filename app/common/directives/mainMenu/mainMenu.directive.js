///<reference path="../../../../node_modules/angular/angular.js">
var app=angular.module('mySchoolApp');

app.directive('mainMenu',function(){
    return{
        templateUrl:'app/common/directives/mainMenu/mainMenu.template.html'
    };
});