(function() {
"use strict";

/**
 * infinitescroller module that includes the public module as a dependency
 */
var app=angular.module('myApp', ['common','infiniteScroll'])
.controller('myCtrl', myCtrl);      

myCtrl.$inject = ['$scope','RedditService'];

function myCtrl($scope,RedditService) {
           
            $scope.items = [];
            $scope.canLoad = true;
            $scope.maxItems = 100000;
             var items;
            $scope.addItems = function () {
           
                RedditService.nextPage().then(function(response) { 
                   items = response;                 
                   
                  for (var i = 0; i < 9; i++) {
                      
                      $scope.items.push(items[i].data.author);
                      
                      }
                   
                })
            
           
                 
            
            };

              $scope.reset = function () {
                $scope.items = [];
                $scope.canLoad = true;
                $scope.addItems();
            };

            $scope.reset();

 }                                                                                                                                      


})();
