'use strict';

var controllersModule = require('./_index');
let rest = require('rest');

/**
 * @ngInject
 */
class WithCtrl {

    constructor(contact, $mdDialog) {
        // ViewModel
        var vm = this;
        vm.contact = contact;
        vm.mdDialog = $mdDialog;
    }

    storeContact() {
        this.mdDialog.hide();
    }

}

controllersModule.controller('WithCtrl', ['contact', '$mdDialog', WithCtrl]);