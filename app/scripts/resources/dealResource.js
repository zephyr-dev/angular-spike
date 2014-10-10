angular.module('adminDashboardApp').
  factory('dealResource', function(Restangular){
   return {
     find: function(dealId){
       return Restangular.one('deals', dealId).get();
     }
   }
});
