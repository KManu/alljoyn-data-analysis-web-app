'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:AnalysisCtrl
 * @description
 * # AnalysisCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
    .controller('AnalysisCtrl', function($scope, dataService) {

        $scope.dataInfo = null;
        $scope.eventData = null;


        dataService.getDescription_A().then(function(data) {
            $scope.dataInfo = data;
            console.log($scope.dataInfo);
        }, function(error) {
            console.log('Error retrieving description '+ error);
        });

        dataService.getEvent_A().then(function(data){
        	$scope.eventData = data;
        	console.log($scope.eventData);
        },function(error){
        	console.log('Error retrieving data '+error);
        });


    });
