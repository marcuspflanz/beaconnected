'use strict';

var controllersModule = require('./_index');
let rest = require('rest');

/**
 * @ngInject
 */
class ExampleCtrl {

  constructor($state) {
    // ViewModel
    var vm = this;
    vm.state = $state;
    vm.title = 'AngularJS, Gulp, Browserify babelified!';
    vm.number = 1234;

    rest('https://catasta.menkent.uberspace.de/couchdb/startupnight_test').then(function(response) {
      console.log('response: ', response);
    });
  }

  openWall() {
    this.state.go('wall');
  }
}

controllersModule.controller('ExampleCtrl', ['$state', ExampleCtrl]);