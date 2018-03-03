(function() {
"use strict";

/**
 * infinitescroller module that includes the public module as a dependency
 */
var app=angular.module('myApp', ['common'])
.controller('myCtrl', myCtrl);      

myCtrl.$inject = ['$scope','RedditService'];

function myCtrl($scope,RedditService) {
           
            $scope.items = [];
            $scope.canLoad = true;
            $scope.maxItems = 100000;
            $scope.insertionVal=10;
            $scope.options = [10,15,20];
             var items;
            $scope.addItems = function () {
                console.log($scope.items)
            if (RedditService.busy){return}
            console.log($scope.insertionVal)
            if (RedditService.items.length>$scope.items.length){ for (var i = 0; i <  $scope.insertionVal; i++) {
                      $scope.items.push(items[i].data.author);
            }
            return;
        }
                RedditService.nextPage().then(function(response) { 
                   items = response;                 
                   console.log(items);
                  for (var i = 0; i <  $scope.insertionVal; i++) {
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
