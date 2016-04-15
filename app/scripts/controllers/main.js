'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
    .controller('MainCtrl', function($scope, dataService) {
        //Get sensor list and event list 
        console.log('MainCtrl');
        $scope.sensorList = null;
        $scope.sensor=null;

        dataService.getSensors_A().then(function(data) {
            $scope.sensorList = data;
            console.log(data);
        }, function(error) {
            console.log('Error retrieving data'+ error);
        });


        $scope.updateDetails = function(sensor){
            $scope.sensor = sensor;
        };















        var count = 0;

        $scope.device = {
            name: 'Alljoyn Device 5',
            id: "ac32d-13f1e123-456b-9873",
            appName: 'AllJoyn Sensor App',
            manufacturer: 'UG',
            modelNumber: 1000,
            softwareVersion: 1.0,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et harum praesentium, deserunt voluptatem. Placeat repellat fugiat quas molestiae? Commodi id beatae blanditiis accusamus numquam a tempora optio incidunt aliquid!'
        };

        $scope.refreshInfo = function() {
            count++;
            $scope.device = {
                name: 'Alljoyn Device ' + count,
                id: "ac32d-13f1e123-456b-9873",
                appName: 'AllJoyn Sensor App',
                manufacturer: 'UG',
                modelNumber: 1000,
                softwareVersion: 1.0,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et harum praesentium, deserunt voluptatem. Placeat repellat fugiat quas molestiae? Commodi id beatae blanditiis accusamus numquam a tempora optio incidunt aliquid!'
            };
        };

        $scope.hello = 'Hi there';
        $scope.imagePath = '/images/devIcon.png';

    });
