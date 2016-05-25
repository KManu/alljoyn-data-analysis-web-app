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
        $scope.selectInfo = null;
        $scope.images = [];
        $scope.captions = [];
        var URL = 'http://localhost:4567/';
        var getFrequencyInfo = null;
        $scope.caption = null;
        $scope.tab = null;
        $scope.legendURL = URL + 'legend.png';




        $scope.selectInfo = function(param) {

            $scope.tab = param;
            if (param === 'freq') {
                console.log('Freq selected');
                $scope.images = [];
                //set images for frequency
                $scope.images = [{
                    caption: 'Sensor activation frequencies relative to each other.',
                    path: URL + 'itemFreqPlot.png'
                }, {
                    caption: 'The most frequent transitions between sensor activations.',
                    path: URL + 'freqSubSeq.png'
                }, {
                    caption: 'The average entropy of activations.',
                    path: URL + 'activityEntropy.png'
                }];
                /*                $scope.images.push(URL + 'itemFreqPlot.png');
                                $scope.images.push(URL + 'freqSubSeq.png');
                                $scope.images.push(URL + 'activityEntropy.png');
                                $scope.caption ='Plots relating to frequency analysis.';
                                $scope.captions.push('Sensor activation frequencies relative to each other.');
                                $scope.captions.push('The most frequent transitions between sensor activations.');
                                $scope.captions.push('The average entropy of activations.');*/
            } else if (param === 'seq') {

                $scope.images = [];
                $scope.images = [{
                    caption: 'Visualisation of 10 sequences. Each color indicates a sensor activation (state). Colors are detailed in the legend ',
                    path: URL + 'seqPlot.png'
                }, {
                    caption: 'The most frequent sequences and their culmulative frequencies.',
                    path: URL + 'seqFreqPlot.png'
                }, {
                    caption: 'The trend of distribution trends of the states in the sequences.',
                    path: URL + 'stateDistPlot.png'
                }];
                /*                $scope.images.push(URL + 'seqPlot.png');
                                $scope.images.push(URL + 'seqFreqPlot.png');
                                $scope.images.push(URL + 'stateDistPlot.png');
                                $scope.caption = 'Plots relating to frequency sequential analysis. The X axis corresponds to times during the day, from 00:00am to 23:59pm   ';
                                $scope.captions.push('Visualisation of 10 sequences. Each color indicates a sensor activation (state). Colors are detailed in the legend ');
                                $scope.captions.push('The most frequent sequences and their culmulative frequencies.');
                                $scope.captions.push('The trend of distribution trends of the states in the sequences.');*/
            } else if (param === 'clust') {
                $scope.images = [];
                $scope.images = [{
                    caption: 'The plot is a dendrogram showing the clustering of similar sensors based on activation patterns (usage).',
                    path: URL + 'hClust.png'
                }];
                /*                $scope.images.push(URL + 'hClust.png');
                                $scope.caption = 'Plot realting to clustering analysis. ';
                                $scope.captions.push('The plot is a dendrogram showing the clustering of similar sensors based on activation patterns (usage).');*/
            }
        };

        dataService.getDescription_A().then(function(data) {
            $scope.dataInfo = data;
            console.log($scope.dataInfo);
        }, function(error) {
            console.log('Error retrieving description ' + error);
        });

        dataService.getEvent_A().then(function(data) {
            $scope.eventData = data;
            console.log($scope.eventData);
        }, function(error) {
            console.log('Error retrieving data ' + error);
        });

        getFrequencyInfo = function() {


        };


    });
