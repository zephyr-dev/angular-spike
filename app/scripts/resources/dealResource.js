angular.module('adminDashboardApp').
  factory('dealResource', ['Restangular', '$http', function(Restangular, $http){
   return {
     find: function(dealId){
       return $http.get('/deals/' + dealId)
     },
     all: function(params){
       return $http.get('/deals', { params: params })
     }
   }
}]);
