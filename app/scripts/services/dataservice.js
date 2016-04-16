'use strict';

/**
 * @ngdoc service
 * @name webAppApp.dataService
 * @description
 * # dataService
 * Factory in the webAppApp.
 */
angular.module('webAppApp')
    .constant('SERVER', {
        url: 'http://localhost:4567/api' //tricky since the ip of the server isnt static.
    })
    .factory('dataService', function($q, $http, SERVER) {
        // Service logic
        // ...



        // Public API here
        return {
            getSensors_A: function() {
                var deferred = $q.defer();
                //get sensors from the A sensor endpoint
                $http({
                    method: 'GET',
                    url: SERVER.url + '/A/sensorList'
                }).then(function(result) {
                    //success callback
                    deferred.resolve(result.data);

                }, function(error) {
                    //failure callback
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            getSensors_B: function() {
                var deferred = $q.defer();
                //get sensors from the B sensor endpoint
                $http({
                    method: 'GET',
                    url: SERVER.url + '/B/sensorList'
                }).then(function(result) {
                    //success callback
                    deferred.resolve(result.data);

                }, function(error) {
                    //failure callback
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            getEvent_A: function() {
                var deferred = $q.defer();
                //get sensors from the A event endpoint
                $http({
                    method: 'GET',
                    url: SERVER.url + '/A/eventList'
                }).then(function(result) {
                    //success callback
                    deferred.resolve(result.data);

                }, function(error) {
                    //failure callback
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            getEvent_B: function() {
                var deferred = $q.defer();
                //get sensors from the B event endpoint
                $http({
                    method: 'GET',
                    url: SERVER.url + '/B/eventList'
                }).then(function(result) {
                    //success callback
                    deferred.resolve(result.data);

                }, function(error) {
                    //failure callback
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            getDescription_A: function() {
                var deferred = $q.defer();
                //get a description of the A dataset
                $http({
                    method: 'GET',
                    url: SERVER.url + '/A/'
                }).then(function(data) {
                    deferred.resolve(data.data);
                }, function(error) {
                    deferred.reject(error);
                });

                return deferred.promise;
            },
            getDescription_B: function() {
                var deferred = $q.defer();
                //get a description of the B dataset
                $http({
                    method: 'GET',
                    url: SERVER.url + '/B/'
                }).then(function(data) {
                    deferred.resolve(data.data);
                }, function(error) {
                    deferred.reject(error);
                });

                return deferred.promise;
            }

        };
    });
