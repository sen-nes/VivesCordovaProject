// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    
    .state('app.cyclists', {
      url: '/cyclists',
      views: {
        'menuContent': {
          templateUrl: 'templates/cyclists.html',
          controller: 'CyclistsCtrl'
        }
      }
    })

  .state('app.cyclist', {
    url: '/cyclist/:cyclistid',
    views: {
      'menuContent': {
        templateUrl: 'templates/cyclist.html',
        controller: 'SingleCyclistController'
      }
    }
  })
  .state('app.days', {
    url: '/days',
    views: {
      'menuContent': {
        templateUrl: 'templates/days.html',
        controller: 'DaysCtrl'
      }
    }
  })
  .state('app.day', {
    url: '/day/:dayid',
    views: {
      'menuContent': {
        templateUrl: 'templates/day.html',
        controller: 'SingleDayController'
      }
    }
  })
  .state('app.teams', {
    url: '/teams',
    views: {
      'menuContent': {
        templateUrl: 'templates/teams.html',
        controller: 'TeamsCtrl'
      }
    }
  })
  .state('app.team', {
    url: '/team/:teamid',
    views: {
      'menuContent': {
        templateUrl: 'templates/team.html',
        controller: 'SingleTeamController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/days');
});

