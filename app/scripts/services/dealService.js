angular.module('adminDashboardApp').
  factory('dealService', function() {
  var pitch1 = 'Dynamically procrastinate B2C users after installed base benefits'
  var pitch2 = 'installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.'
  var pitch3 = 'Dramatically visualize customer directed convergence without revolutionary ROI.'
  var pitch4 = 'B2C users. Dramatically visualize customer directed convergence without revolutionary ROI.'
  var pitch5 = 'procrastinate installed base benefits'
  var pitch6 = 'Dynamically procrastinate B2C users convergence without revolutionary ROI.'
  var pitch7 = 'installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.'
  var pitch8 = 'Dynamically benefits. directed convergence without revolutionary ROI.'

  return {
    all: [
      { startup: 'Pug Luv', industry: 'Dogs', address: 'Japan, World', id: 1, pitch: pitch1},
      { startup: "Mike's Mops", industry: 'Mops', address: 'West Village', id: 2, pitch: pitch2},
      { startup: 'Sony', industry: 'Electronics', address: 'Errwhere', id: 3, pitch: pitch3},
      { startup: 'Microsoft', industry: 'Computers', address: 'Seattle', id: 4, pitch: pitch4},
      { startup: 'Apple', industry: 'Life', address: 'Cupertino', id: 5, pitch: pitch5},
      { startup: "Applebees", industry: 'Foodish', address: 'Suburb USA', id: 6, pitch: pitch6},
      { startup: "ESPN Zone", industry: 'Tourists', address: 'Time Square', id: 7, pitch: pitch7},
      { startup: "Dave & Busters", industry: 'Fun', address: 'Anytown', id: 8, pitch: pitch8}
    ]
  }
});


