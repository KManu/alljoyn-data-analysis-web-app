'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:sensorDataCtrl
 * @description
 * # sensorDataCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
    .controller('SensorDataCtrl', function($scope, $routeParams, dataService) {

        console.log('Sensor Data');
        $scope.sensor = null;
        $scope.sensorEvents = null;
        var ID = $routeParams.sensorID;
        dataService.getSensors_A().then(function(data) {
        	for(var i=0; i < data.length; i++){
        		if(data[i].deviceID === ID ){
        			$scope.sensor=data[i];
        		}
        	}
        }, function(error) {
        	console.log('Error getting sensor list '+error);
        });
        




    });
