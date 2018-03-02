(function () {
"use strict";

angular.module('common')
.service('RedditService', RedditService);


RedditService.$inject = ['$http', 'ApiPath','$sce'];
function RedditService($http, ApiPath,$sce) { 
  var service = this;
  service.after = '';
  service.items = [];

 /* var url = "https://api.reddit.com/hot?after="+service.after ;
    url = $sce.trustAsResourceUrl(url);
  $http.jsonp(url, {jsonpCallbackParam: 'callback'})
  .then(function(data){
  console.log(data)})*/
  service.nextPage = function () {
        var url = ApiPath+"/hot?after="+service.after
     url = $sce.trustAsResourceUrl(url);
     return $http.jsonp(url, {jsonpCallbackParam: 'jsonp'})
      .then(function(data){
       console.log(data.data.data.children);
       var items = data.data.data.children;
        for (var i = 0; i < items.length; i++) {
        service.items.push(items[i]);
      }
      service.after = "t3_" + service.items[service.items.length - 1].id;
       return service.items
      });
    /*var url = "https://api.reddit.com/hot?after=" + this.after + "&jsonp=JSON_CALLBACK";*/
   /* return $http.get(ApiPath+"/hot?after=" + this.after + "&jsonp=JSON_CALLBACK").then(function (response) {
      return response;
    });*/
/*      var url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts"
     url = $sce.trustAsResourceUrl(url);
     return $http.jsonp(url, {jsonpCallbackParam: 'callback'})
      .then(function(data){
       return data
      });
*/
   /*return $http.jsonp(url, {jsonpCallbackParam: 'callback'})
    .then(function(data){
       return data
    });*/
  service.after = "t3_" + this.items[this.items.length - 1].id;  
  };


}
//https://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=angular.callbacks._0
//https://api.reddit.com/hot?after=&jsonp=angular.callbacks._0
//https://api.reddit.com/hot?after=&jsonp=&callback=angular.callbacks._0


})();
