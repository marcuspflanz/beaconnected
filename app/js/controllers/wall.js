'use strict';

import './contact-details.js';
import xapixService from './../xapixservice.js';

var controllersModule = require('./_index');
let rest = require('rest');

/**
 * @ngInject
 */
class WallCtrl {

    constructor($state, $mdBottomSheet, $scope) {
        // ViewModel
        var vm = this;
        vm.state = $state;
        vm.buttonSheet = $mdBottomSheet;
        vm.scope = $scope;
        xapixService.getUsers().then((users) => {
            vm.contacts = users;
            vm.scope.$apply();
        });

        vm.lufthansaLounge = {
            'imagesrc': './images/lufthansa.png',
            'firstname': 'Lufthansa',
            'lastname': 'Lounge 1',
            'email': 'hans@werner.de',
            'interest1': 'lifting up people',
            'interest2': '  like our customers',
            'interest3': '  want to help you'
        };
    }

    myContactProfil() {

    }

    /**
     *
     * @param $event
     * @param contact
     */
    showListBottomSheet($event, contact) {
        this.buttonSheet.show({
            controller: 'ContactDetailsCtrl',
            controllerAs: 'contactDetail',
            templateUrl: 'contact-details.html',
            targetEvent: $event,
            locals: { // additional injections
                contact: contact
            }
        }).then((clickedItem) => {
            // do sth
        });
    }

    logout() {
        this.state.go('welcome');
    }

    backToInterest() {
        this.state.go('interested');
    }

    /**
     *
     */
    openWall() {
        this.state.go('wall');
    }

}

controllersModule.controller('WallCtrl', ['$state', '$mdBottomSheet', '$scope', WallCtrl]);