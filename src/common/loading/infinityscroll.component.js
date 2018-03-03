 (function() {
"use strict";

angular.module('common')
       .directive('infinityScroll', infinityScroll);

infinityScroll.$inject = ['$window'];
function infinityScroll ($window) {
        return {
            link:function (scope, element, attrs) {
                
                var e0 = element[0];
                 
                element.bind('scroll', function () {
                    if (scope.$eval(attrs.canLoad) && e0.scrollTop + e0.offsetHeight >= e0.scrollHeight) {
                        scope.$apply(attrs.infinityScroll);                    
              
                    }
                });
            }
        };
    }
 })();