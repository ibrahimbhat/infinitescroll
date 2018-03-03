(function () {
"use strict";

angular.module('common')
.service('RedditService', RedditService);


RedditService.$inject = ['$http', 'ApiPath','$sce','$timeout'];
function RedditService($http, ApiPath,$sce,$timeout) { 
  var service = this;
  service.after = '';
  service.items = [];
  service.busy = false;


  service.nextPage = function () {    
    service.busy = true;
    var url = ApiPath+"/hot?after="+service.after
    url = $sce.trustAsResourceUrl(url);
       return $http.jsonp(url, {jsonpCallbackParam: 'jsonp'})
           .then(function(data){
                var items = data.data.data.children;
                for (var i = 0; i < items.length; i++) {
                       service.items.push(items[i]);
                                                        }
                    service.after = "t3_" + service.items[service.items.length - 1].id;
                    service.busy = false;
                    return service.items
                                });

    service.after = "t3_" + this.items[this.items.length - 1].id;  
  };
}
})();
