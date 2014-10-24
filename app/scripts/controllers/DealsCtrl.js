'use strict';

/**
 * @ngdoc function
 * @name adminDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminDashboardApp
 */
angular.module('adminDashboardApp')
  .controller('DealsCtrl',['$state', 'deals',  function($state, deals) {
    this.deals = deals;

    this.stages = [
      { name: 'Discovery' },
      { name: 'Screening' },
      { name: 'Due Diligence' },
      { name: 'Closing' },
      { name: 'Pass' }
    ]
    this.selectStartup = function(deal){
      $state.transitionTo('deals.deal', { dealId: deal.id });
    }

    this.selectStage = function(stage){
      $state.go('deals', { stageName: stage.name });
    }
  }]);
