angular.module('adminDashboardApp')
  .controller('MainCtrl', function ($scope) {
    this.deals = [ 
      { startup: 'Pug Luv'}, 
      { startup: "Mike's Mops"},
      { startup: 'Sony'},
      { startup: 'Microsoft'}, 
      { startup: 'Apple'}, 
      { startup: "Applebees"},
      { startup: "ESPN Zone"},
      { startup: "Dave & Busters"}
    ]
  });
