angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('checkIn', {
    url: '/home',
    templateUrl: 'templates/checkIn.html',
    controller: 'checkInCtrl'
  })

  .state('newCheckIn', {
    url: '/new-check-in',
    templateUrl: 'templates/newCheckIn.html',
    controller: 'newCheckInCtrl'
  })

  .state('editCheckIn', {
    url: '/edit-check-in',
    templateUrl: 'templates/editCheckIn.html',
    controller: 'editCheckInCtrl'
  })

  .state('checkInDetails', {
    url: '/check-in-details/:id',
    templateUrl: 'templates/checkInDetails.html',
    controller: 'checkInDetailsCtrl'
  })

$urlRouterProvider.otherwise('/home')

  

});