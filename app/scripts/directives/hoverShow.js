angular.module('adminDashboardApp').
  directive('hoverShow', function(){
   return {
     scope: {
       deal: '=hoverShow'
     },
     restrict: 'A',
     controller: function($state){
       this.visitDeal = function(dealId){
         $state.go('deals.deal', { dealId: dealId})
       }
     },
     link: function(scope, elem, attrs, controller){
       elem.on('click', function(){
         controller.visitDeal(scope.deal.id)
       })
     }
   }
});
