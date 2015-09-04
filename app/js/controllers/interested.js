'use strict';

var controllersModule = require('./_index');
let rest = require('rest');

/**
 * @ngInject
 */
class InterestedCtrl {

    constructor($state) {
        // ViewModel
        var vm = this;
        vm.state = $state;
    }

    goToMap() {
        this.state.go('wall');
    }
}

controllersModule.controller('InterestedCtrl', ['$state', InterestedCtrl]);