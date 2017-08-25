
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'cbit' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'cbit.controllers' is found in controllers.js
var app = angular.module('cbit', ['ionic', 'cbit.controllers', 'ngCordova']);

app.run(function($ionicPlatform, $state, $ionicPopup, $ionicHistory) {

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
      $ionicPlatform.registerBackButtonAction(function (event) {
        event.preventDefault();
        if ($state.current.name == "app.home") {
          var confirmPopup = $ionicPopup.confirm({
            title: 'Exit',
            template: 'Confirm Exit'
          });
 
          confirmPopup.then(function (res) {
            if (res) {
              navigator.app.exitApp();
            }
 
          });
        } else {
          $ionicHistory.nextViewOptions({ disableBack: true });
          $state.go('app.home');
        }
      }, 800);//registerBackButton
/*$ionicPlatform.registerBackButtonAction(function(event) {
    if ($state.current.name=="app.home") { // your check here
      $ionicPopup.confirm({
        title: 'System warning',
        template: 'are you sure you want to exit?'
      }).then(function(res) {
        if (res) {
          ionic.Platform.exitApp();
        }
      })
    } else{
      ionic.Platform.preventDefault();
    }
  }, 100);*/

/*  $ionicPlatform.registerBackButtonAction(function(e){
    if ($rootScope.backButtonPressedOnceToExit) {
      ionic.Platform.exitApp();
    }

    else if ($ionicHistory.backView()) {
      $ionicHistory.goBack();
    }
    else {
      $rootScope.backButtonPressedOnceToExit = true;
      window.plugins.toast.showShortCenter(
        "Press back button again to exit",function(a){},function(b){}
      );
      setTimeout(function(){
        $rootScope.backButtonPressedOnceToExit = false;
      },1000);
    }
    e.preventDefault();
    return false;
  },101);*/

});

app.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider) {
  
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
  .state('app.placementOrg', {
    url: '/placementOrg',
    views: {
      'menuContent': {
        templateUrl: 'templates/placementOrg.html',
		controller: 'placementOrgCtrl'
      }
    }
  })
  .state('app.clubs', {
    url: '/clubs',
    views: {
      'menuContent': {
        templateUrl: 'templates/clubs.html',
		controller: 'clubsCtrl'
      }
    }
  })
  .state('app.fests', {
    url: '/fests',
    views: {
      'menuContent': {
        templateUrl: 'templates/fests.html',
		controller: 'festsCtrl'
      }
    }
  })
  .state('app.cbitnews', {
    url: '/cbitnews',
    views: {
      'menuContent': {
        templateUrl: 'templates/cbitnews.html',
    controller: 'cbitnewsCtrl'
      }
    }
  })
  .state('app.contacts', {
    url: '/contacts',
    views: {
      'menuContent': {
        templateUrl: 'templates/contacts.html',
		controller: 'contactsCtrl'
      }
    }
  })
  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
		controller: 'mapsCtrl'
      }
    }
  })
  .state('app.aboutdev', {
    url: '/aboutdev',
    views: {
      'menuContent': {
        templateUrl: 'templates/aboutdev.html',
    controller: 'devCtrl'
      }
    }
  })
  .state('app.otherinfo', {
    url: '/otherinfo',
    views: {
      'menuContent': {
        templateUrl: 'templates/otherinfo.html',
    controller: 'otherCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $ionicConfigProvider.navBar.alignTitle('center');
  $urlRouterProvider.otherwise('/app/home');
});
