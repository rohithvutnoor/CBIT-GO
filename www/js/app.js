
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'cbit' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'cbit.controllers' is found in controllers.js
var app = angular.module('cbit', ['ionic', 'cbit.controllers', 'ngCordova']);

app.run(function($ionicPlatform) {
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
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
		  controller: 'homeCtrl'
        }
      }
    })
	
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.attendance', {
    url: '/attendance',
    views: {
      'menuContent': {
        templateUrl: 'templates/attendance.html',
		controller: 'attendanceController'
      }
    }
  })
  .state('app.syllabus', {
    url: '/syllabus',
    views: {
      'menuContent': {
        templateUrl: 'templates/syllabus.html',
		controller: 'DownloadController'
      }
    }
  })
 /* .state('app.single', {
    url: '/syllabus/:Id',
    views: {
      'menuContent': {
        templateUrl: 'templates/list1.html',
        controller: 'DownloadController'
      }
    }
  })
  */
  .state('app.papers', {
    url: '/papers',
    views: {
      'menuContent': {
        templateUrl: 'templates/papers.html',
		controller: 'papersController'
      }
    }
  })
  .state('app.transport', {
    url: '/transport',
    views: {
      'menuContent': {
        templateUrl: 'templates/transport.html',
		controller: 'transportController'
      }
    }
  })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
	.state('app.mine', {
      url: '/mine',
      views: {
        'menuContent': {
          templateUrl: 'templates/mine.html',
		  controller: 'mineCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
