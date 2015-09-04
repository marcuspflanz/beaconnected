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

    /**
     *
     */
    openWall() {
        this.state.go('wall');
    }
}

controllersModule.controller('WelcomeCtrl', ['$state', WelcomeCtrl]);