'use strict';

/**
 * @ngdoc overview
 * @name webAppApp
 * @description
 * # webAppApp
 *
 * Main module of the application.
 */
angular
    .module('webAppApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMaterial',
        'md.data.table',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/analysis', {
                templateUrl: 'views/analysis.html',
                controller: 'AnalysisCtrl',
                controllerAs: 'analysis'
            })

        .when('/sensorData/:sensorID', {
                templateUrl: 'views/sensorData.html',
                controller: 'SensorDataCtrl',
                controllerAs: 'sensorData'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
