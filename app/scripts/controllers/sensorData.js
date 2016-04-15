'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:sensorDataCtrl
 * @description
 * # sensorDataCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
    .controller('SensorDataCtrl', function($scope, $routeParams) {

        console.log('Sensor Data');
        $scope.hello = null;

        $scope.sensor = {
            "deviceName": "Test Sensor",
            "deviceID": "66101100",
            "AppName": "AllJoyn Web App",
            "Manufacturer": "UG",
            "ModelNumber": 2000,
            "SoftwareVersion": 1,
            "Description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et harum praesentium, deserunt voluptatem. Placeat repellat fugiat quas molestiae? Commodi id beatae blanditiis accusamus numquam a tempora optio incidunt aliquid!"
        };

        $scope.sensorEvents = [{
        	start: 1,
        	end: 5
        },{
        	start: 7,
        	end: 15
        }];
        



    });
