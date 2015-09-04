'use strict';

import './contact-details.js';
import xapixService from './../xapixservice.js';

var controllersModule = require('./_index');
let rest = require('rest');

/**
 * @ngInject
 */
class WallCtrl {

    constructor($state, $mdBottomSheet) {
        // ViewModel
        var vm = this;
        vm.state = $state;
        vm.buttonSheet = $mdBottomSheet;
        xapixService.getUsers().then((users) => {
            vm.contacts = users.rows;
        });

        //    [
        //    {
        //        'imagesrc': 'http://lorempixel.com/50/50/people?2',
        //        'firstname': 'Hans',
        //        'lastname': 'Werner',
        //        'email': 'hans@werner.de',
        //        'position': 'first',
        //        'interest1': 'Thriller',
        //        'interest2': 'blub',
        //        'interest3': 'blub'
        //    },
        //    {
        //        'imagesrc': 'http://lorempixel.com/50/50/people?2',
        //        'firstname': 'Hans',
        //        'lastname': 'Werner',
        //        'email': 'hans@werner.de',
        //        'position': 'second',
        //        'interest1': 'Thriller',
        //        'interest2': 'blub',
        //        'interest3': 'blub'
        //    }
        //];
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

    /**
     *
     */
    openWall() {
        this.state.go('Wall');
    }
}

controllersModule.controller('WallCtrl', ['$state', '$mdBottomSheet', WallCtrl]);