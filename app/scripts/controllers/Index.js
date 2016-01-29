'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
  .controller('IndexCtrl', function ( $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.hello= 'Hi there';
  });
