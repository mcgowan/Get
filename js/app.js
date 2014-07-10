var App = angular.module('App', ['ui.router'])
.config(function($stateProvider) {
    $stateProvider.state('login', {
        url: "/login",
        templateUrl: 'partials/login.html',
            controllerProvider: function() {
                return 'LoginCtl';
            }      
    }).state('main', {
        url: "/main",
        templateUrl: 'partials/main.html',
            controllerProvider: function() {
                return 'MainCtl';
        }      
    })
});