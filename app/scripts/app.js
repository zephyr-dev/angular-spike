'use strict';

/**
 * @ngdoc overview
 * @name adminDashboardApp
 * @description
 * # adminDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('adminDashboardApp', [
          'ngAnimate',
          'ngCookies',
          'ngSanitize',
          'ui.router',
          'restangular',
          'ngMockE2E',
          'ui.bootstrap.tabs'
  ])
  .config(function ($stateProvider) {
    $stateProvider.state('deals', {
      url: '/deals',
      templateUrl: 'views/deals.html',
    })
    .state('deals.deal', {
      url: '/:dealId',
      templateUrl: 'views/deal.html',
      controller: 'DealCtrl',
      controllerAs: 'dealCtrl',
      resolve: {
        deal: function($stateParams, dealResource){
          return dealResource.find($stateParams.dealId)
        }
      }
    });
}).run(function($httpBackend, dealService) {
  $httpBackend.whenGET(/\/deals\/(\d+)/).respond(function(method, url){
    var deal =  _.filter(dealService.all, function(deal){
      return deal.id === parseInt(url.split('/')[2])
    })
    console.log("Deal is" , deal[0])
    return [200,deal[0] ];
  } )
  $httpBackend.whenGET(/views\/(.*)/).passThrough()
});
