'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('Home', {
            url: '/',
            controller: 'ExampleCtrl as home',
            templateUrl: 'home.html',
            title: 'Home'
        })
        .state('wall', {
            url: '/wall',
            controller: 'WallCtrl as wall',
            templateUrl: 'wall.html',
            title: 'Wall'
        });

    $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;