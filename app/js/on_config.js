'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('wall', {
      url: '/wall',
      controller: 'WallCtrl as wall',
      templateUrl: 'wall.html',
      title: 'Wall'
    })
    .state('welcome', {
      url: '/',
      controller: 'WelcomeCtrl as welcome',
      templateUrl: 'welcome.html',
      title: 'Welcome back!'
    })
    .state('interested', {
      url: '/interested',
      controller: 'InterestedCtrl as interest',
      templateUrl: 'interested.html',
      title: 'Interested'
    });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;