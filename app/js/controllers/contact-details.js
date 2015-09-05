'use strict';

var controllersModule = require('./_index');
let rest = require('rest');

/**
 * @ngInject
 */
class ContactDetailsCtrl {

    constructor(contact, $mdDialog) {
        // ViewModel
        var vm = this;
        vm.contact = contact;
        vm.mdDialog = $mdDialog;
    }

    getInContact() {
        const that = this;
        let result = that.mdDialog.show({
            clickOutsideToClose: true, // close dialog with click outside
            hasBackdrop: true, // remove modal background
            controller: 'WithCtrl',
            controllerAs: 'with',
            templateUrl: 'contact-with.html',
            locals: { // additional injections
                contact: this.contact
            }
        }).then((result) => { // Confirm
            return result;
        });
        if (callback) {
            result = result.then(callback);
        }
        return result
    }
}

controllersModule.controller('ContactDetailsCtrl', ['contact', '$mdDialog', ContactDetailsCtrl]);