'use strict';

/**
 * @ngdoc function
 * @name adminDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminDashboardApp
 */
angular.module('adminDashboardApp')
  .controller('DealCtrl', function (deal) {
    this.tabs = [
      {active: true, title: 'Overview', templateUrl: 'views/tabs/overview.html'},
      {title: 'Pitch Desk', templateUrl: 'views/tabs/overview.html'},
      {title: 'Team', templateUrl: 'views/tabs/overview.html'},
      {title: 'Executive Summary', templateUrl: 'views/tabs/overview.html'},
      {title: 'Financials', templateUrl: 'views/tabs/overview.html'},
      {title: 'Documents', templateUrl: 'views/tabs/overview.html'},
    ]

    this.deal = deal
  });
