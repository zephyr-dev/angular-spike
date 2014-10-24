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
    url: '/deals?stageName',
    views: {
      "master-view": {
        templateUrl: 'views/deals.html',
        controller: 'DealsCtrl',
        controllerAs: 'dealsCtrl'
      }
    },
    resolve:{
      deals: [ 'dealResource', '$stateParams', function(dealResource, $stateParams){
        dealResource.all({ stateName: $stateParams.stateName})
      }]
    }
  })
  .state('deals.deal', {
    url: '/:dealId',
    views: {
      "detail-view":{
        templateUrl: 'views/deal.html',
        controller: 'DealCtrl',
        controllerAs: 'dealCtrl',
      }
    },
    resolve: {
      deal: function($stateParams, dealResource){
        return dealResource.find($stateParams.dealId)
      }
    }
  });
}).run(function($httpBackend, dealService) {
  $httpBackend.whenGET('/deals').respond( [ dealService.all ])
  $httpBackend.whenGET(/\/deals\/(\d+)/).respond(function(method, url){
    console.log("Fetching", url)
    var deal =  _.filter(dealService.all, function(deal){
      return deal.id === parseInt(url.split('/')[2])
    })
    return [200,deal[0] ];
  } )
  $httpBackend.whenGET(/views\/(.*)/).passThrough()
});
