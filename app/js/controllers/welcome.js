'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
class WelcomeCtrl {

  constructor($state) {
    // ViewModel
    var vm = this;
    vm.state = $state;
  }

  onLogin() {
    this.state.go('interested');
  }
}

controllersModule.controller('WelcomeCtrl', ['$state', WelcomeCtrl]);