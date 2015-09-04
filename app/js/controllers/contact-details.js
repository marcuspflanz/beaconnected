'use strict';

var controllersModule = require('./_index');
let rest = require('rest');

/**
 * @ngInject
 */
class ContactDetailsCtrl {

    constructor(contact) {
        // ViewModel
        var vm = this;
        vm.contact = contact;
    }

}

controllersModule.controller('ContactDetailsCtrl', ['contact', ContactDetailsCtrl]);