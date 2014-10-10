angular.module('adminDashboardApp')
  .controller('MainCtrl', function () {
    this.deals = [
      { startup: 'Pug Luv', id: 1},
      { startup: "Mike's Mops", id: 2},
      { startup: 'Sony', id: 3},
      { startup: 'Microsoft', id: 4},
      { startup: 'Apple', id: 5},
      { startup: "Applebees", id: 6},
      { startup: "ESPN Zone", id: 7},
      { startup: "Dave & Busters", id: 8}
    ]
  });
