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
    this.deal = deal
  });
